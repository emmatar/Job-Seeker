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
        createAndAppendElement('div', 'location', jobInfo.job_location, jobPost);
        createAndAppendElement('a', 'url', "View Job", jobPost, jobInfo.job_url)
        return jobPost
    }
    function createAndAppendElement(element, id, textContent, appendTo, href = null) {
        const newEl = document.createElement(element)
        newEl.setAttribute('id', id)
        newEl.textContent = textContent
        if (href) {
            newEl.href=href
        }
        appendTo.append(newEl)
    }
})
