export async function onRequest(context) {
    const requestURL = new URL(context.request.url);
    const resource = requestURL.searchParams.get("resource");
    if (resource && resource.startsWith("acct:")) {
        const username = resource.substring(5);
        return context.env.ASSETS.fetch(new URL(`/.well-known/webfinger/${username}.json`, requestURL.origin));
    }
    return new Response(null, { status: 404 });
}