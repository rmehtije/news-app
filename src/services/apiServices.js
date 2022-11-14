export async function getEverything(data) {
    return await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0338aea9c048417e99441ebd8280e42b');
}
