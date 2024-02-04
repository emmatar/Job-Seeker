
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
        const allJobsContainer = document.querySelector(".all-jobs-container")
        const singleJobInfo = jobInfo[index];
        const jobRole = document.createElement("h2");
        const jobCompany = document.createElement("p");
        const jobLocation = document.createElement("p");
        const jobPostDate = document.createElement("p");
        const jobCompanyUrlCont = document.createElement("div")
        const jobCompanyUrl = document.createElement("a");
        jobCompanyUrlCont.setAttribute('class', 'url');
        const jobPostUrlCont = document.createElement("div");
        const jobPostUrl = document.createElement("a");
        jobPostUrlCont.setAttribute('class', 'url');
        const singleJobPost = document.createElement("div");
        singleJobPost.setAttribute('class', "single-job-post")
        const here = document.createTextNode("Here")
        
    // Assigning the "loop" created elements to the corresponding data for display
        jobRole.textContent = `Job Role: ${singleJobInfo.job_title}`;
        jobCompany.textContent = `Company: ${singleJobInfo.company_name}`;
        jobLocation.textContent = `Location: ${singleJobInfo.job_location}`;
        jobPostDate.textContent = `Post Date: ${singleJobInfo.posted_date}`;
        jobCompanyUrlCont.textContent = "Company-Url: "
        jobPostUrlCont.textContent = "Job-Post-Url: "
        jobPostUrl.title = "This is link"
        jobPostUrl.href = singleJobInfo.job_url;
        jobCompanyUrl.title = "This is link"
        jobCompanyUrl.href = singleJobInfo.company_url;
        console.log(singleJobInfo.job_url);


        jobPostUrl.appendChild(here);
        jobCompanyUrl.appendChild(here);
        singleJobPost.append(jobRole)
        singleJobPost.append(jobCompany)
        singleJobPost.append(jobLocation)
        singleJobPost.append(jobPostDate)
        jobCompanyUrlCont.append(jobCompanyUrl)
        singleJobPost.append(jobCompanyUrlCont)
        jobPostUrlCont.append(jobPostUrl)
        singleJobPost.append(jobPostUrlCont)
        allJobsContainer.append(singleJobPost)

    }

}





linkedinJobSearch();