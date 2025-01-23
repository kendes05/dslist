const apiUrl = 'http://localhost:8080/lists';

async function exibirListas() {
    const collectionDiv = document.querySelector('.collection');
    collectionDiv.innerHTML = '';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.forEach(item =>{
            const p = document.createElement('p');
            p.textContent = item.name
            p.classList.add("title-collection");
            collectionDiv.appendChild(p);
        })
    }
    catch (error){
        const h1 = document.createElement('h1');
        h1.textContent = 'Erro ao carregar listas';
    }

}
window.onload = exibirListas;
