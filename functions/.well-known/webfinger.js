export async function onRequest(context) {
    const resource = new URL(context.request.url).searchParams.get("resource");
    if (resource && resource.startsWith("acct:")) {
        const username = resource.substring(5);
        return env.ASSETS.fetch(`/.well-known/webfinger/${username}.json`)
    }
    return new Response(null, { status: 404 });
}