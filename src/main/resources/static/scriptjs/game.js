document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const gameID = params.get("gameID");
    const apiUrl = `http://localhost:8080/games/${gameID}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    criarGameImgDetails(data)
})
const gameImg = document.getElementById('game-img');
const gameYear = document.getElementById('game-year');
const gameTitle = document.getElementById('game-title');
const gameGenre = document.getElementById('genre-span');
const gamePlatforms = document.getElementById('platforms-span');
const gameScore = document.getElementById('score-span');

const trashIcon = document.querySelector('#icons img:nth-child(1)');
const pencilIcon = document.querySelector('#icons img:nth-child(2)');

const gameDescription = document.getElementById('game-description');

function criarGameImgDetails(data) {
    
    gameImg.src = data.imgUrl
    gameYear.textContent = data.year
    gameTitle.textContent = data.title
    gameGenre.textContent = data.genre
    gamePlatforms.textContent = data.platforms
    gameScore.textContent = data.score

    trashIcon.addEventListener("click",()=>{
        deletarJogo(data.id);
    })

}

async function deletarJogo(id){
    try {
        await fetch(`http://localhost:8080/games/${id}`,{
            method: 'DELETE',
        })
        window.history.back()
    } catch (error) {
        console.log()
    }
}



