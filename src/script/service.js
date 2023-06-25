const input = document.querySelector(".app-area input")
const button = document.querySelector(".app-area button")


function processingData(x) {
    if(input.value === ''){
        alert("campo vazio, Informe o nome de uma Cidade!")
        return
    }
    const key = '13bbfc0dcb2b2ed8e84db6ea3ae86caf'
    let city = input.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br`)
    .then((response) => response.json())
    .then((json) => {
        const data = json

        exibir(data)
    }).catch(() => alert("Digite o nome da cidade, CORRETAMENTE."))


    input.value = ""
}

button.addEventListener("click", processingData)


function exibir(test) {
    const city = document.querySelector(".city")
    let country = document.querySelector(".country")
    const temp = document.querySelector(".humidity")
    let customTemp = document.querySelector(".custom-temp")
    let icon2 = document.querySelector(".custom-icon")
    temp.innerHTML = ""
    icon2.innerHTML = ""
    city.innerHTML = ""
    country.innerHTML = ""
    customTemp.innerHTML = ""

    const weather = test.weather
    console.log(test)
    let img = document.createElement("img")
    img.src = `https://openweathermap.org/img/wn/${weather[0].icon}.png`
    icon2.appendChild(img)


    temp.innerHTML = "Humidade " + test.main.humidity + "%"

    
    city.innerHTML = test.name
    country.innerHTML = test.sys.country
    customTemp.innerHTML = weather[0].description
}

