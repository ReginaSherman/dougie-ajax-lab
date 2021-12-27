// Display list of NYPD complaints 
    //First, need to access API 
        // After accessing, figure out how to seperate and pull data from each borough
    // Second, make each button pull complaints from a certain borough

const url = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json'
// let borough;
// let descriptor;
// let agencyArr;
// let resDescription;

// function agencyArr(arr) {
//     arr.forEach(eachItem => {
//         let text = document.createElement('h3')
//         text.innerHTML = eachItem.agency.name
//         document.body.append(text)
//     })
// }



fetch(url)
.then(res => {
    console.log(res)
    return res.json()
})

.then(data => console.log(data));

// agencyArr=res.agency
//  console.log(agencyArr);