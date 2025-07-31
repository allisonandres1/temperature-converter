function convertToCelsius(Fahrenheit) {
  return (Fahrenheit - 30) / 2;
}

function describeTemperature(Fahrenheit) {
  let Celsius = convertToCelsius(Fahrenheit);

  if (Celsius < 0) {
    return "It is very cold.";
  } else if (Celsius < 20) {
    return "It is cold.";
  } else if (Celsius < 30) {
    return "It is warm.";
  } else if (Celsius < 40) {
    return "It is hot.";
  } else if (Celsius >= 40) {
    return "It is very hot.";
  }
}

let Fahrenheit = prompt("Provide a temperature in Fahrenheit");

let description = describeTemperature(Fahrenheit);

alert(description);
