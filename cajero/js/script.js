var cuentas = [
  { nombre: "Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 }
];

var selectedAccount = null;

function login() {
  var cuentaSeleccionada = document.getElementById("cuentas").value;
  var passwordIngresado = document.getElementById("password").value;

  if (passwordIngresado === "password") {
    selectedAccount = cuentas[cuentaSeleccionada];
    document.getElementById("operaciones").style.display = "block";
    document.getElementById("saldo").textContent = selectedAccount.saldo;
  } else {
    alert("Password incorrecto. Inténtalo nuevamente.");
  }
}

function consultarSaldo() {
  alert("Saldo actual: $" + selectedAccount.saldo);
}

function ingresarMonto() {
  var montoIngresar = parseInt(document.getElementById("montoIngresar").value);
  var nuevoSaldo = selectedAccount.saldo + montoIngresar;

  if (nuevoSaldo <= 990) {
    selectedAccount.saldo = nuevoSaldo;
    document.getElementById("saldo").textContent = nuevoSaldo;
    document.getElementById("mensaje").textContent = "Monto ingresado: $" + montoIngresar;
  } else {
    alert("No se puede ingresar más de $990.");
  }
}

function retirarMonto() {
  var montoRetirar = parseInt(document.getElementById("montoRetirar").value);
  var nuevoSaldo = selectedAccount.saldo - montoRetirar;

  if (nuevoSaldo >= 10) {
    selectedAccount.saldo = nuevoSaldo;
    document.getElementById("saldo").textContent = nuevoSaldo;
    document.getElementById("mensaje").textContent = "Monto retirado: $" + montoRetirar;
  } else {
    alert("No se puede retirar más de lo que queda en la cuenta. El saldo mínimo es $10.");
  }
}
