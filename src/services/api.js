export async function getProjects() {
    const response = await fetch("http://localhost:8080/windmill");

    const data = await response.json();

    return data;
}