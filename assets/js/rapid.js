function performSearch() {
    const searchParams = JSON.parse(localStorage.getItem("searchHistory"))[JSON.parse(localStorage.getItem("searchHistory")).length - 1]
    const resultsContainer = document.querySelector(".all-jobs-container");

    const url = "https://job-salary-data.p.rapidapi.com/job-salary";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "0541dd8b97msh03cec23616ac582p1097d1jsn8d0e7bf3f6db",
            'X-RapidAPI-Host': "job-salary-data.p.rapidapi.com"
        }
    };

    fetch(`${url}?job_title=${encodeURIComponent(searchParams.job)}&location=${encodeURIComponent(searchParams.city)}&radius=200`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                const salaries = []
                data.forEach(element => {
                    salaries.push(element.median_salary)
                });
                const median_salary = salaries.reduce((a, b)=> a+b)/salaries.length
                const salaryContainer = document.getElementById('salary-container')
                salaryContainer.innerHTML = `
                    <div class="job-post">
                        <div id="median-salary">Median Salary: ${median_salary}</div>
                    </div>
                `;
            } else {
                throw new Error("Incomplete or missing salary data in the API response.");
            }
        })
        .catch(error => {
            console.error("Error fetching job salary data:", error);
            resultsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
