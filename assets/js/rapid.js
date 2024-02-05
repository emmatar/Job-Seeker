function performSearch() {
    const jobTitleInput = document.querySelector(".input");
    const jobTitle = jobTitleInput.value;

    const resultsContainer = document.querySelector(".all-jobs-container");

    const url = "https://job-salary-data.p.rapidapi.com/job-salary";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "f6ac6a98fbmshe1f8c2ebdaa6ad6p12edf2jsn2b949ceb316a",
            'X-RapidAPI-Host': "job-salary-data.p.rapidapi.com"
        }
    };

    fetch(`${url}?job_title=${encodeURIComponent(jobTitle)}&location=new%20york%2C%20usa&radius=200`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.job_title && data.company_name && data.location && data.employment_type && data.is_remote !== undefined && data.job_post_url) {
                resultsContainer.innerHTML = `
                    <div class="job-post">
                        <div id="job-role">${data.job_title} Salary Information</div>
                        <div id="company-name">Company: ${data.company_name}</div>
                        <div id="location">Location: ${data.location}</div>
                        <div id="employment-type">Employment Type: ${data.employment_type}</div>
                        <div id="is-remote">Remote: ${data.is_remote ? 'Yes' : 'No'}</div>
                        <div id="job-post-url">URL: ${data.job_post_url}</div>
                    </div>
                `;
            } else {
                throw new Error("Incomplete or missing data in the API response.");
            }
        })
        .catch(error => {
            console.error("Error fetching job salary data:", error);
            resultsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
