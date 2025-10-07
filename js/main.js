document.querySelector('button').addEventListener('click', getCatFact)

function getCatFact () {
// const city = document.querySelector('#cityInput').value
// const country = document.querySelector('#countryInput').value    
// const apiKey = "e0b2a9491e2774b97bb54f7445436204"
const url =  "https://meowfacts.herokuapp.com/?lang=esp-es"
fetch (url)
    .then (res => res.json ())
    .then (data => {
        console.log(data);
        document.querySelector('h3').innerText = data.data[0]
    })
    .catch (error => {
        console.log(`error ${error}`);
    }) 

}