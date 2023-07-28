//slider

const slider = document.querySelector(".form__range")
const output = document.querySelector(".form__output-value")
const guests = document.querySelectorAll(".form__data-how")[1]
const price = document.querySelector(".form__price .title")

slider.oninput = function () {
    output.textContent = `${slider.value} человек`
    guests.textContent = `${slider.value}`
    price.textContent = `${slider.value * 5} 000 ₽`
}

slider.addEventListener("mousemove", () => {
    slider.style.background = `linear-gradient(90deg, #545E76 ${(slider.value - 10) / 0.9}%, #F3F5F8 ${(slider.value - 10) / 0.9}%)`
})
//мышка и тач-скрин
slider.addEventListener("touchmove", () => {
    slider.style.background = `linear-gradient(90deg, #545E76 ${(slider.value - 10) / 0.9}%, #F3F5F8 ${(slider.value - 10) / 0.9}%)`
})

slider.addEventListener("'pointerout", () => {
    slider.style.background = `linear-gradient(90deg, #545E76 ${(slider.value - 10) / 0.9}%, #F3F5F8 ${(slider.value - 10) / 0.9}%)`
})
//мышка и тач-скрин
slider.addEventListener("'touchout", () => {
    slider.style.background = `linear-gradient(90deg, #545E76 ${(slider.value - 10) / 0.9}%, #F3F5F8 ${(slider.value - 10) / 0.9}%)`
})

//drop

const drop = document.querySelector(".drop-menu")
const dropButton = document.querySelector(".form__drop-bnt")
const valueService = document.querySelector(".form__service-value")

dropButton.addEventListener("click", (event) => {
    dropButton.classList.toggle("form__drop-bnt--active")
    drop.classList.toggle("drop-menu--active")
    event.preventDefault()
})

drop.addEventListener("click", (event) => {
    if (event.target.closest(".drop-menu__item")) {
        valueService.value =  event.target.textContent
        dropButton.classList.remove("form__drop-bnt--active")
        drop.classList.remove("drop-menu--active")
        console.log(valueService.value)
    }
})

//input label

const inputs = document.querySelectorAll(".form__wishes")
const labels = document.querySelectorAll(".form__wishes-label")

for (let i = 0; i < inputs.length; i++) {
    inputs[i].onfocus = function () {
        labels[i].classList.add("form__wishes-label--active")
    }
    inputs[i].onblur = function () {
        if (!inputs[i].value) {
            labels[i].classList.remove("form__wishes-label--active")
        }
    }
}

//date

function convertMonthToNormal (month) {
    switch (month) {
        case "01": return "Января"
        case "02": return "Февраля"
        case "03": return "Марта"
        case "04": return "Апреля"
        case "05": return "Мая"
        case "06": return "Июня"
        case "07": return "Июля"
        case "08": return "Августа"
        case "09": return "Сентября"
        case "10": return "Октября"
        case "11": return "Ноября"
        case "12": return "Декабря"
    }
}

const date = document.querySelector("input[type='date']")
const outputDate = document.querySelector(".form__current-date")
const outputDate2 = document.querySelectorAll(".form__data-how")[2]

date.addEventListener("input", () => {
    const masDate = date.value.split("-")

    if (masDate[2][0] === "0") {
        outputDate.textContent = `${masDate[2].replace("0", "")} ${convertMonthToNormal(masDate[1])} ${masDate[0]}`
    }
    else {
        outputDate.textContent = `${masDate[2]} ${convertMonthToNormal(masDate[1])} ${masDate[0]}`
    }
    outputDate2.textContent = `${masDate[2]}.${masDate[1]}.${masDate[0]}`
   
})

// formats

const formats = document.querySelector(".form__formats")
const allFormats = document.querySelectorAll(".form__format-item")
const currentFormat = document.querySelectorAll(".form__data-how")[0]

formats.addEventListener("click", (event) => {
    if (event.target.closest(".form__format-item")) {
        allFormats.forEach(item => {
            item.classList.remove("form__format-item--active")
        })
        event.target.classList.add("form__format-item--active")
        currentFormat.textContent = event.target.textContent
    }
    event.preventDefault()
})

// go to next form

const buttonForm = document.querySelector(".form__button")
const secondForm = document.querySelector(".form-event--second")

buttonForm.addEventListener("click", (event) => {
    secondForm.scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
    event.preventDefault()
})





