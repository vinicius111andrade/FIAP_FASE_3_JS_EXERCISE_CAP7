var objBotao = document.getElementById("botao");

objBotao.onclick = function()
{
  var level = prompt("Insira o seu tipo de assinatura: ");
  var bruteIncome = parseFloat(prompt("Insira o seu faturamento anual: "));

  switch(level) {
    case "Basic":
      printBonus(0.3, bruteIncome)
      break;
    case "Silver":
      printBonus(0.2, bruteIncome)
      break;
    case "Gold":
      printBonus(0.1, bruteIncome)
      break;
    case "Platinum":
      printBonus(0.05, bruteIncome)
      break;
    default:
      alert("Não foi possível ler a assinatura. Digite um destes valores: Basic, Silver, Gold, Platinum");
  }

  function printBonus(percentage, bruteIncome) {
      if(typeof bruteIncome === "number") {
        var bonus = (percentage * bruteIncome).toString();

        if (isNaN(bonus)) {
          alert("Faturamento inválido. Digite um número como 1000.0");
        } else {
          alert("O bônus será: " + bonus);
        }
      }
      else {
        alert("Digite um valor numérico por favor, com separador de decimal '.'");
      }
  }
}
