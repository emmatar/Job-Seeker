document.addEventListener('DOMContentLoaded', function () {
    const savedJobsContainer = document.querySelector('.all-jobs-container');

    const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];

    savedJobs.forEach((savedJob => {
        const jobPost = createJobPost(savedJob);
        savedJobsContainer.appendChild(jobPost);
    }))

    function createJobPost(jobInfo) {
        const jobPost = document.createElement('div')
        jobPost.className = 'job-post';

        createAndAppendElement('div', 'job-role', jobInfo.job_title, jobPost);
        createAndAppendElement('div', 'company-name', jobInfo.company_name, jobPost);
        creantAndAppendElement('div', 'location', jobInfo.job_location, jobPost);
        createAndAppendElement('div', 'median-salary', `Median Salary: ${jobInfo.median_salary}`, jobPost)
    }
})