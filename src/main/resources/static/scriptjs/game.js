document.addEventListener("DOMContentLoaded", async () => {
    console.log("oi")
    const params = new URLSearchParams(window.location.search);
    const gameID = params.get("gameID");
    const apiUrl = `http://localhost:8080/games/${gameID}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    criarGameImgDetails(data)
})




function criarGameImgDetails(data) {
    
    const gameImgDetailsDiv = document.createElement('div');
    gameImgDetailsDiv.id = 'game-img-details';

    
    const imgDiv = document.createElement('div');
    imgDiv.id = 'img';

    const img = document.createElement('img');
    img.src = data.imgUrl || ''; 
    img.alt = data.title || 'Game Image';
    imgDiv.appendChild(img);

    const gameDetailsDiv = document.createElement('div');
    gameDetailsDiv.id = 'game-details';

    const year = document.createElement('h3');
    year.id = 'game-year';
    year.textContent = data.year || 'Unknown Year';
    gameDetailsDiv.appendChild(year);

    const title = document.createElement('h1');
    title.id = 'game-title';
    title.textContent = data.title || 'Untitled Game';
    gameDetailsDiv.appendChild(title);

    const genre = document.createElement('h3');
    genre.id = 'game-genre';
    genre.innerHTML = `Genre: <span>${data.genre || 'N/A'}</span>`;
    gameDetailsDiv.appendChild(genre);

    const platforms = document.createElement('h3');
    platforms.id = 'game-platforms';
    platforms.innerHTML = `Platforms: <span>${data.platforms || 'N/A'}</span>`;
    gameDetailsDiv.appendChild(platforms);

    const score = document.createElement('h3');
    score.id = 'game-score';
    score.innerHTML = `Score: <span>${data.score || 'N/A'}</span>`;
    gameDetailsDiv.appendChild(score);


    gameImgDetailsDiv.appendChild(imgDiv);
    gameImgDetailsDiv.appendChild(gameDetailsDiv);

    const gameDescription = document.createElement('p');
    gameDescription.id = 'game-description';
    gameDescription.textContent = data.longDescription || 'No description available.';

    const mainContentDiv = document.getElementById('main-content');
    mainContentDiv.appendChild(gameImgDetailsDiv);
    mainContentDiv.appendChild(gameDescription);
}