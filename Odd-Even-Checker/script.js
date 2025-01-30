'use strict'

function checkNumber() {
    let number = document.querySelector('input').value
    let result = document.querySelector('h3')


    if(number === '') {
        result.innerHTML = 'iltimos son kiriting'
        result.style.color = 'red'
        return
    }


    if (number % 2 == 0) {
        result.innerHTML = `${number} Bu toq son`
        result.style.color = 'green'
    } else {
        result.innerHTML = `${number} Bu toq son`
        result.style.color = 'blue'
    }
}