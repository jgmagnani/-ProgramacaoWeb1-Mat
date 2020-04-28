var frutas, texto;
frutas = ["Banana", "Laranja", "Manga", "Maracujá", "Kiwi"];

texto = "<ul>";
frutas.forEach(funcao);
texto += "</ul>";
document.getElementById("lista").innerHTML = texto;

function funcao(valor) {
  texto += "<li>" + valor + "</li>";
} 