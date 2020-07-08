let searchBar = document.querySelector('#search');
let searchBtn = document.querySelector('#searchBtn');
let getAllBtn = document.querySelector('#getAllBtn'); 

searchBtn.addEventListener('click', createCountryDiv)
getAllBtn.addEventListener('click', getAllCountries)

function createCountryDiv() {
    let searchName = document.querySelector('#search').value
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let characterObj = JSON.parse(this.response)
        let countryContainer = document.querySelector('#countryContainer')
        countryContainer.innerHTML = "";
        console.log(this.status)

        createCountryBox(characterObj, countryContainer);
    }
    xhr.open('GET', `https://restcountries.eu/rest/v2/name/${searchName}`)
    xhr.send();

}
function getAllCountries() {
            const xhr = new XMLHttpRequest();
            let num = 0
            xhr.onload = function(){
                    let characterObj = JSON.parse(this.response)
                    let countryContainer = document.querySelector('#countryContainer')
                    countryContainer.innerHTML = "";
                    createCountryBox(characterObj, countryContainer);
            };
            xhr.open('GET', `https://restcountries.eu/rest/v2/all`);
            xhr.send();

    }



function createCountryBox(obj, countryDivContainer) {
    for (let i = 0; i < obj.length; i++) {

        let newDiv = document.createElement("div")
        newDiv.classList='DivCountry'
        let imgUrl = obj[i].flag

        let domain = obj[i].topLevelDomain
        let capital = obj[i].capital
        var currencies =  obj[i].currencies[0]    
        let borders = obj[i].borders
        let name = obj[i].name
        newDiv.innerHTML = `<img class="infoImg" src="${imgUrl}">
    <span class="infoSpan">Name : ${name}</span>
     <span class="infoSpan">Top Domain : ${domain}</span>
     <span class="infoSpan">Capital : ${capital}</span>
      <span class="infoSpan">Currencies -<br> Name: ${currencies.name},<br>Code: ${currencies.code},<br> Symbol: ${currencies.symbol}</span>
     <span class="infoSpan">Neighboring Countries : ${borders}</span>`
     countryDivContainer.appendChild(newDiv)
    }
}
