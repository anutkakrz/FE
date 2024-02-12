// const button = document.querySelector(".btn")
// button.addEventListener("click",function () {console.log("клик");})
// const buttonplus = document.querySelector(".btnplus")
// const buttonminus = document.querySelector(".btnminus")
// const buttonsbros = document.querySelector(".btnsbros")
// const title = document.querySelector("h1")
// let number = 0
// buttonplus.addEventListener("click",function () {
//    number++ 
//    title.innerText = number})
// buttonminus.addEventListener("click",function () { 
//       if (number >=1)
//       {number--}
//       else {number = 10}
//       title.innerText = number})  
// buttonsbros.addEventListener("click",function () {
//          number = 0
//          title.innerText = number})        

// const buttonplus = document.querySelector(".btnplus")
// const buttonminus = document.querySelector(".btnminus")
// const buttonsbros = document.querySelector(".btnsbros")
// const title = document.querySelector("h1")
// let number = 0
// buttonplus.addEventListener("click", function() {
//    if(number === 10) {
//        title.innerText = `${number} Это максимально допустимое значение`
//    } else {
//        number++ // number = number + 1
//        title.innerText = number // добавить текст number в h1
//    }
// })
// buttonminus.addEventListener("click",function () { 
//       if (number >=1)
//       {number--}
//       else {number = 10}
//       title.innerText = number})  
// buttonsbros.addEventListener("click",function () {
//          number = 0
//          title.innerText = number})     

// При нажатии на все кнопки - в консоли отображать "Кликнули"
// используя цикл for()

// const buttons = document.querySelectorAll("button")
// for (let i=0; i<buttons.length; i++) {
//    buttons[i].addEventListener("click",function(){
//       console.log("кликнули");
//    })
// }

// const numbers = [10, 20, 30, 40, 50]
// for (let i=0; i<numbers.length; i++) {
//    console.log(numbers[i]);
// }

// const numbers = [10, 20, 30, 40, 50]
// numbers.forEach(function(number){
//    console.log(number);
// })

// const names = ["Arsen", "Hanna", "Sergey", "Maria"]
// names.forEach(function(name) {
//    console.log(`привет, ${name}`);
// })

const buttons = document.querySelectorAll("button")
buttons.forEach(function(button){
   button.addEventListener("click",function(
      {console.log("кликнули")}
   )
   
}