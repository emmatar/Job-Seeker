const jobResults = document.querySelector("#job-results")
const oneJobCont = document.querySelector("#one-job-cont") 
const averageSalary = document.querySelector("#average-salary-text")

const testDataObj = {
    position: "developer",
    company: "google",
    location: "kansasCity",
    salary: "$73,000/year"
}

// The empty parameter for this function will be the data retrieved from the Job Salary API
// displayJobSalary () {
    // averageSalary.textContent = {data};
// }

// The empty parameter for this function will be the data retrieved from the Job Search API
function displayJobData () {
    const jobType = testDataObj.position;

    jobResults.textContent = `Search Results for: ${testDataObj.position}`
    for (let index = 0; index < testDataObj.length; index++) {
        const jobPosition = document.createElement("h3");
        const jobCompany = document.createElement("h4");
        const jobSalary = document.createElement("p");
        const jobRemote = document.createElement("p");
        const jobLink = document.createAttribute("a")

    }
}
displayJobData()