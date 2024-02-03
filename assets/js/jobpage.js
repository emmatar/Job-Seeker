
const jobRole = document.querySelector("#job-role")

// this function links the data from the outer linkedIn.js file to this file.
// "data" (the above parameter) is the actual info that the search will display
linkedinJobSearch().then(function(data) {
    displayJobSearchData(data)
})
 


function displayJobSearchData(jobInfo) {
    // (jobInfo) is the data from the search.
    // Use the data in a "for-loop" to first target the "jobpage.html" elements
    // Then, assign the elements with the info from the data (jobInfo) retrieved
    for (let index = 0; index < jobInfo.length; index++) {
        // The variable below "singleJobInfo" will display information on one single
        // job post
        const singleJobInfo = jobInfo[index];
        console.log(singleJobInfo);
    }
}





linkedinJobSearch();