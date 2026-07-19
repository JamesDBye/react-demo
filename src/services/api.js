export async function getProjects() {
    const response = await fetch("http://localhost:8080/windmill");

    const data = await response.json();

    return data;
}

export async function getTasks(projectCode) {
    const response = await fetch(
        `http://localhost:8080/windmill/projects/${projectCode}/tasks`
    );

    const data = await response.json();

    return data;
}

export async function addEligiblePortfolios(projectCode) {
    const response = await fetch(
        `http://localhost:8080/windmill/projects/${projectCode}/eligible-portfolios`,
        {
            method: "POST"
        }
    );

    return response;
}