const apiUrl = 'http://localhost:8080/lists';

document.addEventListener('DOMContentLoaded', exibirListas);

async function exibirListas() {
    const collectionDiv = document.querySelector('#collection');
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        collectionDiv.innerHTML = '';

        data.forEach(item => {
            const p = document.createElement('p');
            const img_trash = document.createElement('img')
            const img_pencil = document.createElement('img')
            const divIcons = document.createElement('div');


            divIcons.classList.add("icons")
            p.classList.add("title-collection");
            img_trash.classList.add("trash-icon")
            img_pencil.classList.add("pencil-icon")

            p.textContent = item.name;

            img_pencil.src = "..//static/icons/icons8-lápis-30.png";
            img_trash.src = "..//static/icons/icons8-trash-24.png";

            img_pencil.setAttribute("data-id",item.id)
            img_trash.setAttribute("data-id",item.id)
            p.setAttribute("data-id", item.id);

            divIcons.appendChild(img_trash);
            divIcons.appendChild(img_pencil);


            collectionDiv.appendChild(p);
            collectionDiv.appendChild(divIcons)
        });

        const collections = document.querySelectorAll(".title-collection");
        collections.forEach(collection => {
            collection.addEventListener("click", () => {
                const listID = collection.getAttribute("data-id");
                window.location.href = `games.html?listID=${listID}`;
            });
        });

        const trashIcons = document.querySelectorAll(".trash-icon");
        trashIcons.forEach(icon => {
            icon.addEventListener("click", () => excluirLista(icon.getAttribute("data-id")));        })

        const pencilIcons = document.querySelectorAll(".pencil-icon");
        pencilIcons.forEach(icon => {
            icon.addEventListener("click", () => alert("dev"));
        })
    } catch (error) {
        
    }
}

async function excluirLista(id) {
    try {
        const response = await fetch(apiUrl+`/${id}`,{
            method: 'DELETE'
        })
        window.location.reload();

    } catch (error) {
        console.log(error)
    }
}