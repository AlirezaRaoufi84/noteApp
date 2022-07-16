let $ = document


let deleteINput = $.getElementById('btn-delete')
let addInput = $.getElementById('btn-save')
let inputField = $.getElementById('input-field')
let parentDiv = $.getElementById('listed')
let colorsBox = $.querySelectorAll('.color-box')
let newElement;
let mainColor;

colorsBox.forEach(function (colorBox) {
    colorBox.addEventListener('click', function (event) {
         mainColor = event.target.style.backgroundColor
        inputField.style.backgroundColor = mainColor
    })
})

function inputAdd (){
    if (inputField.value){
   newElement =  $.createElement('div')
   newElement.setAttribute('class', 'card shadow-sm rounded')
   let newParag =  $.createElement('p')
   newParag.setAttribute('class', 'card-text p-3')
    newParag.innerHTML = inputField.value
    newElement.append(newParag)
    parentDiv.append(newElement)
    newElement.style.backgroundColor = mainColor
    inputField.value = ""
    inputField.style.backgroundColor = '#fff'

    newElement.addEventListener('click', removeElem)
    }
}


function deletebtn (){
     inputField.value = ''
     inputField.style.backgroundColor = '#fff'
}


function addWithEnter(event){
    if(event.keyCode === 13){
        inputAdd()
    }
}

function removeElem(event){
    event.target.parentElement.remove()
}

$.body.addEventListener('keydown', addWithEnter)
addInput.addEventListener('click', inputAdd)
deleteINput.addEventListener('click', deletebtn)
//remove event is in inputAdd Function