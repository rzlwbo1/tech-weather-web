

// get elem
const mainCuacaElem = document.querySelector(".main-cuaca");
const tempNowElem = document.querySelector(".temp-now");
const tekananElem = document.querySelector(".tekanan");
const lembapElem = document.querySelector(".kelembapan");
const anginElem = document.querySelector(".angin");
const formElem = document.querySelector("form");



// fetch cuaca
const getCuacaApi = async (evt) => {

  evt.preventDefault();

  const inputUser = document.querySelector("input").value;
  const cityElem = document.querySelector(".city");

  cityElem.innerHTML = inputUser.slice(0,1).toUpperCase() + inputUser.slice(1);

  const responseApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputUser}&appid=861a48eb73edd8c286596e89a64a56c6&units=metric`);

  const data = await responseApi.json();

  // to dom
  let cuaca = data.weather[0].main;
  mainCuacaElem.innerHTML = cuaca.slice(0,1).toUpperCase() + cuaca.slice(1);

  let temp = data.main.temp;
  tempNowElem.innerHTML = temp + ' Celcius';


  let tekanan = data.main.pressure;
  tekananElem.innerHTML = `${tekanan} Pha`;


  let lembap = data.main.humidity;
  lembapElem.innerHTML = `${lembap}`;

  let angin = data.wind.speed;
  anginElem.innerHTML = `${angin}`;

  console.log(data.wind);
}

formElem.addEventListener('submit', getCuacaApi)


const getCuacaApDefault = async () => {


  const responseApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=bekasi&appid=861a48eb73edd8c286596e89a64a56c6&units=metric`);

  const data = await responseApi.json();

  // to dom
  let cuaca = data.weather[0].main;
  mainCuacaElem.innerHTML = cuaca.slice(0,1).toUpperCase() + cuaca.slice(1);

  let temp = data.main.temp;
  tempNowElem.innerHTML = temp + ' Celcius';


  let tekanan = data.main.pressure;
  tekananElem.innerHTML = `${tekanan} Pha`;


  let lembap = data.main.humidity;
  lembapElem.innerHTML = `${lembap}`;

  let angin = data.wind.speed;
  anginElem.innerHTML = `${angin}`;

  console.log(data.wind);

}

getCuacaApDefault()








