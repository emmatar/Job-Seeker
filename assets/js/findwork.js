// api key and base url for the findwork api
const apiKey = "6354c3d819209a8e9dd1caae478340bd167e3905";
const apiUrl = "https://findwork.dev/api/jobs";

// function to perform the job search
async function performSearch() {
    // get the search query from the input field
    const searchQuery = document.getElementById("searchQuery").value;
    // get the container to display search results
    const resultsContainer = document.getElementById("results");
    
    try {
        // display loading spinner while fetching data
        resultsContainer.innerHTML = "<div class='loading-spinner'>Loading...</div>";

        // fetch data from the findwork api
        const response = await fetch(`${apiUrl}/?location=london&search=${searchQuery}&sort_by=relevance`, {
            headers: {
                "Authorization": `Token ${apiKey}`
            }
        });

        // check if the fetch was successful
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        // parse the json data from the response
        const data = await response.json();
        // display the results on the webpage
        displayResults(data.results);
    } catch (error) {
        // log and display an error message if something goes wrong
        console.error("Error fetching data:", error);
        resultsContainer.innerHTML = "<div class='error-message'>Error fetching data. Please try again.</div>";
    }
}

// function to display search results
function displayResults(results) {
    // get the container to display search results
    const resultsContainer = document.getElementById("results");
    // clear previous results
    resultsContainer.innerHTML = "";

    // iterate over the results and create HTML elements for each job
    results.forEach(job => {
        const jobElement = document.createElement("div");
        jobElement.innerHTML = `
            <h3>${job.role}</h3>
            <p>${job.company_name} - ${job.location}${job.remote ? ' (Remote)' : ''}</p>
            <!-- Add more details as needed -->
        `;
        // append the job element to the results container
        resultsContainer.appendChild(jobElement);
    });
}