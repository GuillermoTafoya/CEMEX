window.onload = () => {
  if (sessionStorage.ID) {
    document.getElementById("h1").textContent =
      "Hola " + sessionStorage.username;
  } else {
    window.location = "/";
  }
};

const btnLogout = document.getElementById("logout");
btnLogout.addEventListener("click", () => {
  sessionStorage.removeItem("ID");
});

const game = document.getElementById("game");
game.setAttribute("href", "/game/index.html?id=" + sessionStorage.ID);
