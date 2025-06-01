export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;
    if (path === '/' || path === '') path = '/index.html';
    if (!path.includes('.')) path += '.html';
    try {
      const asset = await env.ASSETS.fetch(new Request(`https://routt-distillery.bradleychr.workers.dev${path}`));
      return asset;
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  }
};