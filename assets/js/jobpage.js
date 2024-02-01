var api = "f5217bc497mshb6d8ca9af6d12ccp18ff3bjsnbe6c2937dff1";

function base() {
    var url = `https://job-salary-data.p.rapidapi.com/job-salary?X-RapidAPI-Host=job-salary-data.p.rapidapi.com&X-RapidAPI-Key=${apiKey}&job_title=developer&location=newyork`

    fetch(url).then(function (response) {
        if (response.ok) {
            response.json().then(function (data){
                console.log(data);
            })
        }
    })
}

base();