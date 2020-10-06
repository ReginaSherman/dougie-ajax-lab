const form = document.querySelector('form')
const input = document.querySelector('input[type=text]')
const ul = document.querySelector('#complaints')
// console.log(ul)

form.addEventListener('click', (event) => {
    event.preventDefault()
    // console.log(event.target.dataset.borough)
    const borough = event.target.dataset.borough
    let limit = input.value || 10
    const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&agency=NYPD&$limit=${limit}`
    fetch(url)
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
            ul.innerHTML = ''
            resJson.forEach(complaint => {
                const li = document.createElement('li')
                const span = document.createElement('span')
                const button = document.createElement('button')
                const p = document.createElement('p')

                ul.appendChild(li)
                li.append(span, button, p)

                span.innerText = complaint.descriptor
                button.innerText = "WHAT DID THE POLICE DO?"
                p.innerText = complaint.resolution_description
                p.classList.add('hidden')

                button.addEventListener('click', (event) => {
                    // p.classList.toggle('hidden')
                    // li.lastChild.classList.toggle('hidden')
                    button.nextSibling.classList.toggle('hidden')
                })
            })
        })
        .catch(err => console.log(err))
})

