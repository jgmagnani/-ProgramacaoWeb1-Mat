var filmes = [];		
filmes = ["Donnie Darko, 2001, Suspense", "Star Trek, 1979, Ficção", "Shrek, 2001, Animação"];
var imagens = [];
imagens = ["filme1.png", "filme1.png", "filme1.png"];

var texto = [];
for (i = 0; i < filmes.length ; i++) {
  texto += "<li>" + "<a  href=" + ">" + filmes[i] + "</a>" + "</li>";
  
}
document.getElementById("filmes").innerHTML = texto;

