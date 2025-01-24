const apiUrl = 'http://localhost:8080/games';
console.log("cheguei 1");

async function exibirJogos() {
    try {
        console.log("cheguei 2");
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        data.forEach(item => {
            
            const gameDiv = document.createElement('div');
            gameDiv.classList.add('game');
            
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img');
            
            const img = document.createElement('img');
            img.classList.add('game-img');
            img.src = "";
            img.alt = '';
            imgDiv.appendChild(img);
            
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
            
            gameDiv.appendChild(imgDiv);
            gameDiv.appendChild(detailsDiv);
            
            const mainContentDiv = document.getElementById("main-content")
            
            mainContentDiv.appendChild(gameDiv);
        });
        
        
    } catch (error) {
        console.log("deu bosta")
    }
}
document.addEventListener('DOMContentLoaded',exibirJogos);