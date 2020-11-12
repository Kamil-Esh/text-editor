let input = document.getElementById("text-input")
let output = document.getElementById("text-output")
document.getElementById("text-input").oninput = copySecondArea

function copySecondArea() {
    let text = input.value
    output.innerText = text
}

function textThrough(elem) {
    output.classList.toggle('line-through')
    output.classList.remove('text-underline')
    document.querySelectorAll('.decoration').forEach((elemDec) => {
        if (elem !== elemDec) {
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function fontItalic(elem) {
    output.classList.toggle('font-italic')
    elem.classList.toggle('active')
}

function fontBold(elem) {
    output.classList.toggle('font-weight-bold')
    elem.classList.toggle('active')
}

function textUnderline(elem) {
    output.classList.toggle('text-underline')
    output.classList.remove('line-through')
    document.querySelectorAll('.decoration').forEach((elemDec) => {
        if (elem !== elemDec) {
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textDanger(elem) {
    output.classList.toggle('text-danger')
    output.classList.remove('text-primary')
    output.classList.remove('text-success')
    document.querySelectorAll('.color').forEach((elemDec) => {
        if (elem !== elemDec) {
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textPrimary(elem) {
    output.classList.toggle('text-primary')
    output.classList.remove('text-danger')
    output.classList.remove('text-success')
    document.querySelectorAll('.color').forEach((elemDec) => {
        if (elem !== elemDec) {
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textSuccess(elem) {
    output.classList.toggle('text-success')
    output.classList.remove('text-danger')
    output.classList.remove('text-primary')
    document.querySelectorAll('.color').forEach((elemDec) => {
        if (elem !== elemDec) {
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textCenter(elem) {
    output.classList.toggle('text-center')
    output.classList.remove('text-left')
    output.classList.remove('text-right')
    document.querySelectorAll('.align').forEach((elemDec) => {
        if (elem !== elemDec) {
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textRight(elem) {
    output.classList.toggle('text-right')
    output.classList.remove('text-left')
    output.classList.remove('text-center')
    document.querySelectorAll('.align').forEach((elemDec) => {
        if (elem !== elemDec) {
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textLeft(elem) {
    output.classList.toggle('text-left')
    output.classList.remove('text-center')
    output.classList.remove('text-right')
    document.querySelectorAll('.align').forEach((elemDec) => {
        if (elem !== elemDec) {
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textLowercase(elem) {
    output.classList.toggle('text-lowercase')
    output.classList.remove('text-uppercase')
    document.querySelectorAll('.text-case').forEach((elemDec) => {
        if (elem !== elemDec) {
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textUppercase(elem) {
    output.classList.toggle('text-uppercase')
    output.classList.remove('text-lowercase')
    document.querySelectorAll('.text-case').forEach((elemDec) => {
        if (elem !== elemDec) {
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
