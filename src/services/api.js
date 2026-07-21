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

    if (!response.ok) {
        throw new Error(`Failed to add eligible portfolios: ${response.status}`);
    }

    return response;
}

export async function reviewEligiblePortfolios(projectCode) {
    const response = await fetch(
        `http://localhost:8080/windmill/projects/${projectCode}/eligible-portfolios/review`
    );

    if (!response.ok) {
        throw new Error(
            `Failed to review eligible portfolios: ${response.status}`
        );
    }

    const data = await response.json();

    return data;
}