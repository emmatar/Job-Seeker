function performSearch() {
    const searchParams = JSON.parse(localStorage.getItem("searchHistory"))[JSON.parse(localStorage.getItem("searchHistory")).length - 1]
    const resultsContainer = document.querySelector(".all-jobs-container");

    const url = "https://job-salary-data.p.rapidapi.com/job-salary";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "3397035361mshf743d9bcd8fc100p102234jsnfeb441dbede6",
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
            if (data && data.median_salary) {
                resultsContainer.innerHTML = `
                    <div class="job-post">
                        <div id="median-salary">Median Salary: ${data.median_salary}</div>
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
