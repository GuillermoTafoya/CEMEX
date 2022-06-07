window.onload = () => {
  if (sessionStorage.ID) {
    window.location = "/";
  }
};

const boton = document.getElementById("boton");
boton.addEventListener("click", async () => {
  const userName = document.getElementById("userInput");
  const pass = document.getElementById("passInput");
  //alert(userName.value + " " + pass.value);
  // Enviar datos al servidor mediante un POST

  //const data = { username: userName.value, password: pass.value };
  const data = { username: "Username", password: "Password" }; // Arriba original
  const opciones = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const respuesta = await fetch("http://localhost:5000/login", opciones);
  const datos = await respuesta.json();
  console.log(datos);
  if (datos.isLogin) {
    //sessionStorage.setItem("ID", datos.user.username);
    sessionStorage.setItem("ID", "EstoEsunID"); // Arriba original
    sessionStorage.setItem("username", datos.user.username);
    sessionStorage.setItem("helmetNum", datos.user.helmetNum);
    sessionStorage.setItem("ordinaryNum", datos.user.ordinaryNum);
    sessionStorage.setItem("generalNum", datos.user.generalNum);
    sessionStorage.setItem("totalNum", datos.user.totalNum);
    sessionStorage.setItem("coins", datos.user.coins);
    sessionStorage.setItem("weapon1", datos.user.weapon1);
    sessionStorage.setItem("weapon2", datos.user.weapon2);
    sessionStorage.setItem("weapon3", datos.user.weapon3);
    sessionStorage.setItem("weapon4", datos.user.weapon4);
    alert(sessionStorage.username);
    window.location = "/";
  } else {
    alert("Datos incorrectos");
  }
});
