let cl = document.getElementById("celsius");
let fh = document.getElementById("fahren");
let kl = document.getElementById("kelvin");
//Input is Celsius
cl.oninput = function () {
  //Converting into Fahren Heat
  fh.value = parseFloat(cl.value * 9) / 5 + 32;

  //Converting into Kelvin
  kl.value = parseFloat(cl.value) + 273.15;
};

//Input is Fahren Heat
fh.oninput = function () {
  //Converting into Celsius
  cl.value = (parseFloat(fh.value - 32) * 5) / 9;

  //Converting into Kelvin
  kl.value = ((parseFloat(fh.value) - 32) * 5) / 9 + 273.15;
};

//Input is Kelvin
kl.oninput = function () {
  //Converting into Celsius
  cl.value = parseFloat(kl.value) - 273.15;

  //Converting into Fahren Heat
  fh.value = ((parseFloat(kl.value) - 273.15) * 9) / 5 + 32;
};
