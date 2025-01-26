const apiUrl = 'http://localhost:8080/lists';


const openPopup = document.getElementById("add-collection");

const closePopupAddButton = document.getElementById("close-add-button");
const addPopup = document.getElementById("add-popup");
const sendAddButton = document.getElementById("send-add-button");
const addInput = document.getElementById("add-input");

const closePopUpRenameButton = document.getElementById("close-rename-button");
const renamePopup = document.getElementById("rename-popup");
const renameInput = document.getElementById("rename-input");
const sendRenameButton = document.getElementById("send-rename-button");

openPopup.addEventListener("click", () => {
    addPopup.classList.remove("hidden");
});


closePopUpRenameButton.addEventListener("click",()=>{
    renamePopup.classList.add("hidden");
})


closePopupAddButton.addEventListener("click", () => {
    addPopup.classList.add("hidden");
});

sendAddButton.addEventListener("click", () => {
    const collectionName = addInput.value.trim();
    console.log("oi")
    adicionarLista(collectionName);
})



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
            img_pencil.title = "Renomear"
            img_trash.src = "..//static/icons/icons8-trash-24.png";
            img_trash.title = "Deletar"
            
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
                icon.addEventListener("click", () =>{
                    renamePopup.classList.remove("hidden")
                    sendRenameButton.addEventListener("click",()=>{
                        const newName = renameInput.value.trim();
                        const listId = icon.getAttribute("data-id")
                        console.log(listId)
                        atualizarLista(listId,newName);
                    })
                });
            })
        } catch (error) {
            
    }
}

async function adicionarLista(nome) {
    try {
        await fetch(apiUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:nome})
        })
        addPopup.classList.add("hidden")
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
}
async function excluirLista(id) {
    try {
        await fetch(apiUrl+`/${id}`,{
            method: 'DELETE'
        })
        window.location.reload();

    } catch (error) {
        console.log(error)
    }
}

async function atualizarLista(id,nome) {
    try{
        await fetch (apiUrl+`/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:nome})
        }
    )
    renamePopup.classList.add("hidden")
    window.location.reload();
}catch(error){
        console.log(error);
    }
}
