// this function links the data from the outer linkedIn.js file to this file.
// "data" (the above parameter) is the actual info that the search will display
linkedinJobSearch().then(function(data) {
    if(!data || data.error) {
        document.querySelector(".all-jobs-container").innerHTML = `<h1>${data?.error || "Data Retrieval Failed"}</h1>`;
        return
    }
    displayJobSearchData(data)
})

// performSearch().then(function(data) {
//     displayJobSearchSalary()
// });
const allJobsContainer = document.querySelector(".all-jobs-container")
function displayJobSearchData(jobInfo) {
    // (jobInfo) is the data from the search.
    // First, target the single "#job-post" container
    // Then, create elements that will display the info we want the user to see
    // Then, assign the elements with the info from the data (jobInfo) retrieved
    for (let index = 0; index < jobInfo.length; index++) {
    // The variable "singleJobInfo" will display information for a single job.
    // Variables created to display data from LinkedIn Job Search API
        const singleJobInfo = jobInfo[index];
        const jobInfoContainer = document.createElement("div")
        jobInfoContainer.setAttribute("class", "align-job-info")
        const jobRole = document.createElement("h2");
        jobRole.setAttribute('class', 'job-role-title')
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
        const jobDetailCont = document.createElement("div")
        jobDetailCont.setAttribute("class", "detail-container")
        const here = document.createTextNode("Here")
        const savedButton =document.createElement('button')
        savedButton.setAttribute('class', 'button is-primary')
        savedButton.setAttribute('data-info',btoa(JSON.stringify(singleJobInfo)))
        savedButton.textContent = "Save Job"


        
    // Assigning the "loop" created elements to the corresponding data for display
        jobRole.textContent = `Job Role: ${singleJobInfo.job_title}`;
        jobCompany.textContent = `Company: ${singleJobInfo.company_name}`;
        jobLocation.textContent = `Location: ${singleJobInfo.job_location}`;
        jobPostDate.textContent = `Post Date: ${singleJobInfo.posted_date}`;
        jobCompanyUrlCont.textContent = "Company-Url: "
        jobPostUrlCont.textContent = "Job-Post-Url: "
        jobPostUrl.title = "This is link"
        jobPostUrl.href = singleJobInfo.job_url;
        jobPostUrl.textContent = "Here"
        jobCompanyUrl.title = "This is link"
        jobCompanyUrl.href = singleJobInfo.company_url;

        jobPostUrl.appendChild(here);
        jobCompanyUrl.appendChild(here);
        singleJobPost.append(jobRole)
        jobInfoContainer.append(jobCompany)
        jobInfoContainer.append(jobLocation)
        jobInfoContainer.append(jobPostDate)
        jobCompanyUrlCont.append(jobCompanyUrl)
        jobInfoContainer.append(jobCompanyUrlCont)
        jobPostUrlCont.append(jobPostUrl)
        jobInfoContainer.append(jobPostUrlCont)
        singleJobPost.append(jobInfoContainer)
        singleJobPost.append(savedButton)
        allJobsContainer.append(singleJobPost)

    }

}

// performSearch();
linkedinJobSearch();
allJobsContainer.addEventListener('click', function(event){
    if (event.target.matches('button')) {
        const currentSavedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [] 
        currentSavedJobs.push(JSON.parse(atob(event.target.dataset.info)))
        localStorage.setItem('savedJobs', JSON.stringify(currentSavedJobs))
    }
})
document.getElementById('saved-jobs').addEventListener('click', function(){
    window.location.assign('saved.html')
})

