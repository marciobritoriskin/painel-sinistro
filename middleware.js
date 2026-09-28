// Senha do link publicado no Vercel (Basic Auth), no mesmo padrão do servidor
// local (:8788): usuário + senha em variáveis de ambiente do projeto Vercel
// (PAINEL_USUARIO / PAINEL_SENHA), nunca no código. Sem elas configuradas, o
// middleware recusa TODO acesso (falha fechada, não aberta).
export const config = { matcher: '/:path*' };

export default function middleware(request) {
  const usuario = process.env.PAINEL_USUARIO;
  const senha = process.env.PAINEL_SENHA;

  if (!usuario || !senha) {
    return new Response(
      'Painel sem senha configurada — defina PAINEL_USUARIO e PAINEL_SENHA nas variáveis de ambiente do projeto no Vercel.',
      { status: 500 },
    );
  }

  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Basic ')) {
    const decodificado = atob(authHeader.slice(6));
    const i = decodificado.indexOf(':');
    const user = decodificado.slice(0, i);
    const pass = decodificado.slice(i + 1);
    if (user === usuario && pass === senha) {
      return; // undefined = segue para o arquivo estático
    }
  }

  return new Response('Autenticação necessária.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Painel de Sinistros Riskin"' },
  });
}
