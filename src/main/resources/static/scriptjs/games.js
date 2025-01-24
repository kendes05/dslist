document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const listID = params.get("listID");
    const apiUrl = `http://localhost:8080/lists/${listID}/games`;
    const response = await fetch(`http://localhost:8080/lists/${listID}`);
    const data = await response.json();
    const collectionTitle = document.getElementById("title-collection");
    collectionTitle.innerHTML = data.name;
    exibirJogos(apiUrl,listID)
})

async function exibirJogos(api,listID) {
    try {
        const response = await fetch(api);
        const data = await response.json();

        
        data.forEach(item => {
            
            const gameDiv = document.createElement('div');
            gameDiv.classList.add('game');
            gameDiv.setAttribute("data-id",item.id)
        
            const img = document.createElement('img');
            img.classList.add('game-img');
            img.src = item.imgUrl;
            img.alt = '';
            
            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('game-details');
            
            const title = document.createElement('h3');
            title.classList.add('game-title');
            title.textContent = item.title; 
            detailsDiv.appendChild(title);
            
            const description = document.createElement('p');
            description.classList.add('game-description');
            description.textContent = item.shortDescription;
            detailsDiv.appendChild(description);
            
            const year = document.createElement('p');
            year.classList.add('game-year');
            year.textContent = item.year; 
            detailsDiv.appendChild(year);
            
            gameDiv.appendChild(img);
            gameDiv.appendChild(detailsDiv);

            gameDiv.addEventListener("click",()=>{
                const gameID = gameDiv.getAttribute("data-id");
                window.location.href = `game.html?gameID=${gameID}`;
            });

            
            const mainContentDiv = document.getElementById("main-content")
            
            mainContentDiv.appendChild(gameDiv);
        });
        
        
    } catch (error) {
        console.log(error)
    }
}