async function render(){
    const response= await fetch('https://restcountries.com/v3.1/region/europe?fields=name,capital,maps,flags');
    const flaags= await response.json();
    let countryName=``;


        for(const country of flaags){
        countryName+=`
          <div class="col">
              <div class="card h-100">
                <a href="${country.maps.openStreetMaps}" target="_blank"><img src="${country.flags.png}" class="card-img-top" alt="${country.flags.png}"></a>
                   <div class="card-body">
                      <h5 class="card-title">${country.name.official}</h5>
                      <p class="card-text">${country.capital}</p>
                   </div>
              </div>
        </div>`
    }
    document.querySelector('#flaags').innerHTML = countryName;

}
window.addEventListener('load', render());