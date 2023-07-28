//drop menu

const dropButtons = document.querySelectorAll(".header__drop-btn")
const menuDrops = document.querySelectorAll(".header__drop")

document.addEventListener("click", (event) => {
    if (event.target.closest(".header__drop-btn")) {
        if (event.target.classList.contains("header__drop-btn--active")) {
            event.target.classList.remove("header__drop-btn--active")
            event.target.nextElementSibling.classList.remove("header__drop--active")
        }
        else {
            dropButtons.forEach(item => {
                item.classList.remove("header__drop-btn--active")
            })

            menuDrops.forEach(item => {
                item.classList.remove("header__drop--active")
            })

            event.target.classList.add("header__drop-btn--active")
            event.target.nextElementSibling.classList.add("header__drop--active")
        }
    }

    else if (event.target.closest(".header__link--disable")) {
        event.preventDefault()
    }

    else {
        dropButtons.forEach(item => {
            item.classList.remove("header__drop-btn--active")
        })

        menuDrops.forEach(item => {
            item.classList.remove("header__drop--active")
        })
    }
    
})

// Go to link

const button = document.querySelector(".welcome__btn")
const firstForm = document.querySelector(".form-event")

button.addEventListener("click", () => {
    firstForm.scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
})

// burger 

const burgerButton = document.querySelector(".header__btn-burger")
const itemMenu = document.querySelector(".header__items")

burgerButton.addEventListener("click", () => {
    itemMenu.classList.toggle("header__items--active")
})

