
document.getElementById('sumForm').addEventListener('submit', function (e) {
    e.preventDefault();
    sumTwoNumbers();
})


function sumTwoNumbers(e) {
const firsInput = document.getElementById("first-number");
const secondInput = document.getElementById("second-number");
const thirdInput = document.getElementById("third-number");
const sumElement = document.getElementById("sum")

const firsInputValue = firsInput.value
const secondInputValue = secondInput.value
const thirdInputValue = thirdInput.value

const sumResult = Number(firsInputValue) + Number(secondInputValue) + Number(thirdInputValue)
sumElement.innerText = sumResult
     
}

document.getElementById("contactform").addEventListener("submit", function(e) {
    e.preventDefault();
    contactUs()
})


function contactUs() {
   const emailInput = document.getElementById("email-input")
   const messageInput = document.getElementById("message-input")

   const showEmail = document.getElementById("email")
   const showMessage = document.getElementById("message")

   showEmail.innerText = emailInput.value
   showMessage.innerText = messageInput.value
}