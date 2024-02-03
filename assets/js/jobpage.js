const allJobsContainer = document.querySelector(".all-jobs-container")
// this function links the data from the outer linkedIn.js file to this file.
// "data" (the above parameter) is the actual info that the search will display
linkedinJobSearch().then(function(data) {
    displayJobSearchData(data)
})
 


function displayJobSearchData(jobInfo) {
    // (jobInfo) is the data from the search.
    // First, target the single "#job-post" container
    // Then, create elements that will display the info we want the user to see
    // Then, assign the elements with the info from the data (jobInfo) retrieved

    for (let index = 0; index < jobInfo.length; index++) {
    // The variable "singleJobInfo" will display information for a single job.
    // Variables created to display data from LinkedIn Job Search API
        const singleJobPost = document.querySelector(".single-job-post");
        const singleJobInfo = jobInfo[index];
        const jobRole = document.createElement("h2");
        const jobCompany = document.createElement("h3");
        const jobLocation = document.createElement("p");
        const jobPostDate = document.createElement("p");
        const jobCompanyUrl = document.createElement("a");
        const jobPostUrl = document.createElement("a");
    // Assigning the "loop" created elements to the corresponding data for display
        jobRole.textContent = `Job Role: ${singleJobInfo.job_title}`;
        jobCompany.textContent = `Company: ${singleJobInfo.company_name}`;
        jobLocation.textContent = `Location: ${singleJobInfo.jon_location}`;
        jobPostDate.textContent = `Post Date: ${singleJobInfo.posted_date}`;
        jobCompanyUrl.textContent = `Company-Url: ${singleJobInfo.company_url}`;
        jobPostUrl.textContent = `Job-Post-Url: ${singleJobInfo.job_url}`;

        singleJobPost.append(jobRole)
        singleJobPost.append(jobCompany)
        singleJobPost.append(jobLocation)
        singleJobPost.append(jobPostDate)
        singleJobPost.append(jobCompanyUrl)
        singleJobPost.append(jobPostUrl)
    }
    allJobsContainer.append(singleJobPost)
}





linkedinJobSearch();