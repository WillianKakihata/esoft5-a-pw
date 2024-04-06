
async function main() {
let params = new URLSearchParams(document.location.search);
let pokemon = params.get("evolucao");

document.querySelector("#Teste").textContent = "Pagina do Pokemon " + pokemon;

const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

const imagemUrl = await resposta.json().then((response) => { 
    return response.sprites.front_default 
});

const imagem = document.createElement("img");
imagem.src = imagemUrl;
imagem.alt = "Imagem do " + pokemon;

const sobreInfo = document.createElement("h3");
sobreInfo.textContent = "Informações sobre " + pokemon;

document.querySelector("#pokemon").appendChild(sobreInfo);
document.querySelector("#pokemon").appendChild(imagem);
    
}

main() 