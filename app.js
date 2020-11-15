const gamestart = {
    game: document.getElementById('game'),
    mallGeneration: function () {
        const mall = document.createElement('div')
        mall.className = 'mall'
        mall.style.backgroundPositionX = (gamestart.randNumber(1, 600) + 'px')
        mall.style.backgroundPositionY = (gamestart.randNumber(1, 400) + 'px')
        console.log(gamestart.randNumber(1, 600))
        console.log(gamestart.randNumber(1, 400))
        game.appendChild(mall)
    },
    randNumber: function (min, max) {
        let randNum = Math.floor(Math.random() * (max - min) + min)
    return randNum
    }
}

document.addEventListener('DOMContentLoaded', gamestart);
gamestart.mallGeneration()





// const game = document.getElementById('game')

// app = {
//     row: 0,
//     cell: 0
// }

// player = {
//     playerX: 2,
//     playerY: 3
// }

// currentCell = {
//     cellX: 0,
//     cellY: 0
// }

// const randNumber = (min, max) => {
//     let randNum = Math.floor(Math.random() * ((max * max) - min) + min)
//     return randNum
// }

// const play = () => {
//     app.row = document.getElementById('rowhtml').value
//     app.cell = document.getElementById('rowhtml').value
//     createBoard();
// }

// const createBoard = () => {
//     game.innerHTML = ''
//     for (let i = 0; i < app.row; i++) {
//         const createRow = document.createElement('div')
//         createRow.className = 'row'

//         for (let j = 0; j < app.cell; j++) {
//             const createCell = document.createElement('div')
//             createCell.className = 'cell'
//             createRow.appendChild(createCell)
//         }
        
//         game.appendChild(createRow)
        
//     }
  
//     let mallX = randNumber(0, app.row)
//     let mallY = randNumber(0, app.row)

//     const createMall = document.createElement('div')
//     createMall.className = 'mall'
  

// }

// const clean = () => {
//     game.innerHTML = ''
// }

