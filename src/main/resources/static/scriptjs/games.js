document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const listID = params.get("listID");
    const apiUrl = `http://localhost:8080/lists/${listID}/games`;
    console.log("1")
    exibirJogos(apiUrl)
})

async function exibirJogos(api) {
    try {
        console.log("2")
        const response = await fetch(api);
        const data = await response.json();
        
        data.forEach(item => {
            
            const gameDiv = document.createElement('div');
            gameDiv.classList.add('game');
        
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
            
            const mainContentDiv = document.getElementById("main-content")
            
            mainContentDiv.appendChild(gameDiv);
        });
        
        
    } catch (error) {
        console.log(error)
    }
}