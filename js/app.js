const game = document.getElementById('game')
const gameContainer = document.getElementById('game-container')

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

    createBoard()

}

const musicP = () => {
    const audio = document.getElementById("audio")
    audio.play()
}

const randomNumber = (min, max) => {
    let randNum = Math.floor(Math.random() * max - min) + min
    return randNum
}

const createBoard = () => {
    game.innerHTML = ''
    app.mall.xMall = app.row
    app.mall.yMall = app.row
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

            if (i === app.player.xPlayer && j === app.player.yPlayer) {
                createCell.classList.add('player')
            }
        }
        game.appendChild(createRow)
    }
    if ((app.player.xPlayer === (app.mall.xMall - 1)) && (app.player.yPlayer === (app.mall.yMall - 1))) {
        window.setTimeout(gameWon, 500)
    }

}

const clean = () => {
    game.innerHTML = ''
    const casesNumber = document.getElementById('rowhtml')
    casesNumber.value = ''
    app.player.yPlayer = 0
    app.player.xPlayer = 0
}

const reDrawBoard = () => {
    createBoard()
}

const movePlayer = () => {
    document.addEventListener("keyup", function (e) {
        switch (e.key) {
            case 'ArrowDown':
                if (app.player.yPlayer === (app.cell - 1)) {
                    break
                }
                app.player.yPlayer += 1
                createBoard()
                break;
            case 'ArrowUp':
                if (app.player.yPlayer === 0) {
                    break
                }
                app.player.yPlayer -= 1
                createBoard()
                break;
            case 'ArrowLeft':
                if (app.player.xPlayer === 0) {
                    break
                }
                app.player.xPlayer -= 1
                createBoard()
                break;
            case 'ArrowRight':
                if (app.player.xPlayer === (app.cell - 1)) {
                    break
                }
                app.player.xPlayer += 1
                createBoard()
                break;
        }
    })
}

const gameWon = () => {
    window.alert("C'est gagné")
    game.innerHTML = ''
    app.player.xPlayer = 0
    app.player.yPlayer = 0
}

document.addEventListener('DomContentLoaded', play())
movePlayer()