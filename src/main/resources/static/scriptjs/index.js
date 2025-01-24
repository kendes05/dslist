const apiUrl = 'http://localhost:8080/lists';

document.addEventListener('DOMContentLoaded', exibirListas);

async function exibirListas() {
    const collectionDiv = document.querySelector('#collection');
    collectionDiv.innerHTML = '';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Adiciona as listas ao DOM
        data.forEach(item => {
            const p = document.createElement('p');
            p.textContent = item.name;
            p.setAttribute("data-id", item.id);
            p.classList.add("title-collection");

            collectionDiv.appendChild(p);
        });

        const collections = document.querySelectorAll(".title-collection");
        collections.forEach(collection => {
            collection.addEventListener("click", () => {
                const listID = collection.getAttribute("data-id");
                window.location.href = `games.html?listID=${listID}`;
            });
        });
    } catch (error) {
        const h3 = document.createElement('h3');
        h3.textContent = 'Erro ao carregar listas';
        collectionDiv.appendChild(h3);
    }
}
