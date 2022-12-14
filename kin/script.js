let container = document.getElementById("contain")
let head = document.getElementById("head")
let list = document.getElementById("list")
let headTitle = document.createElement('h1')
headTitle.innerHTML = "To Do List"
head.appendChild(headTitle)



    let d = new Date();
    let year = d.getFullYear()
    let month = d.getMonth()
    let day = d.getDay()
    let hour =d.getHours()
    let min = d.getMinutes()
    let date = document.createElement("p")
    head.appendChild(date)
    date.innerHTML = `${year} - ${day} -  ${hour} - ${min} - ` 
    time()
function time(){
    let d = new Date();
    let year = d.getFullYear()
    let month = d.getMonth()
    let day = d.getDay()
    let hour =d.getHours()
    let min = d.getMinutes()
    let sec =d.getSeconds()
    date.innerHTML = `${year} - ${day} -  ${hour} - ${min} - ${sec} ` 
    setTimeout(time, 1000)
}



let listnumber = 0
let number = document.createElement("p")
number.innerHTML = `Total ${listnumber} Tasks completed`
head.appendChild(number)



let input = document.createElement("input")
head.appendChild(input)
let btn = document.createElement("button")
btn.innerHTML = "Add"
head.appendChild(btn)



let kin = document.getElementsByTagName("input")[0].value
let text = document.createElement("div")
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    let pp = document.createElement("p")
    pp.innerHTML = kin
    let icontg = document.createElement("div")
    let icon = '<i class="bi bi-trash3"></i>'
    icontg.innerHTML = icon
    

btn.addEventListener("click", add)


let secTwo = document.getElementById("list") 
let jagsaaltTit = document.createElement("h1")
jagsaaltTit.innerHTML ="Tasks"
secTwo.appendChild(jagsaaltTit)



    
    


function add (){
   if (kin.length > 1){
    listnumber++

    list.appendChild(text)
    text.appendChild(checkBox)
    text.appendChild(pp)
    text.appendChild(icontg)
    
    document.getElementsByTagName("input")[0].value = ""
    number.innerHTML = `Нийт ${listnumber} жагсаалт`
   }
}

icontg.addEventListener("click", deleted)
function deleted(){
    let barih = document.getElementsByClassName(index)[0]
    barih.remove()
}

