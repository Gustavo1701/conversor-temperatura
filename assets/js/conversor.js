
function converter() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const opcoes = document.getElementById('opcoes').value;
    let convertedValue;
  
    if (opcoes === "celsius") {
      convertedValue = (temperature * 1.8) + 32;
    } else {
      convertedValue = (temperature - 32) / 1.8;
    }
  
    const convertedUnit = opcoes === "celsius" ? "Fahrenheit" : "Celsius";
    document.getElementById('resultado').innerHTML = `${temperature}°${opcoes} é igual a ${convertedValue.toFixed(2)}°${convertedUnit}`;
  }

function apagar(){
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('temperature').value = "";    
}