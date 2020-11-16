const game = document.getElementById('game')

const app = {
    row: 0,
    cell: 0,

    mall: {
        xMall: 0,
        yMall: 0,
    },

    player: {
        xPlayer: 0,
        yPlayer: 0,
    }

}

const play = () => {
    app.row = document.getElementById('rowhtml').value
    app.cell = document.getElementById('rowhtml').value
    createBoard();
}

const randomNumber = (min, max) => {
    let randNum = Math.floor(Math.random() * max - min) + min
    return randNum
}

const createBoard = () => {
    game.innerHTML = ''
    app.mall.xMall = app.row
    app.mall.yMall = app.row 
    console.log(app.mall.xMall)
    console.log(app.mall.yMall)
    for (let i = 0; i < app.row; i++) {
        const createRow = document.createElement('div')
        createRow.className = 'row'
    
        for (let j = 0; j < app.cell; j++) {
            const createCell = document.createElement('div')
            createCell.className = 'cell'
            createRow.appendChild(createCell)

            if (i === (app.mall.xMall - 1) && j === (app.mall.yMall - 1)) {
                createCell.classList.add('mall')
            }

            if (i === app.player.xPlayer && j === app.player.xPlayer) {
                createCell.classList.add('player')
            }

        }
    
        game.appendChild(createRow)
    }
}

const clean = () => {
    game.innerHTML = ''
    const casesNumber = document.getElementById('rowhtml')
    casesNumber.value = ''
}

// obstacles
// if (i === app.mall.xMall && j === app.mall.yMall) {
            //     createCell.classList.add('green')
            // }
// const randObstacles = (max) => {
//     let x = randomNumber(0, max)
//     let y = randomNumber(0, max)
//     app.mall.xMall = x
//     app.mall.yMall = y
// }
