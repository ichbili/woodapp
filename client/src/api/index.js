export const testServer = async () => {
    const response = await fetch('/api');
    const body = await response.json();   
    return body;
}
  