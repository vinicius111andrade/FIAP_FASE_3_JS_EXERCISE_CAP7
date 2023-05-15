var objBotao = document.getElementById("botao");

objBotao.onclick = function()
{
    var minute = prompt("Insira o número de minutos marcados na máquina: ");

    var minuteFactorial = factorial(minute);
    alert("A senha é: LIBERDADE" + minuteFactorial);

function factorial(number) {
    var result = 1
    while(number > 1) {
        result = result * number
        number--
    }
    return result
}

}
