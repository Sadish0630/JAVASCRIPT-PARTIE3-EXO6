let firstNumber = 9
let secondNumber = 6
let para = document.createElement("p")
while (firstNumber / secondNumber > 1) {
    para.innerText = firstNumber /= secondNumber
}
document.body.append(para); 