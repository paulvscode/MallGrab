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
    createBoard()
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
}

const clean = () => {
    game.innerHTML = ''
    const casesNumber = document.getElementById('rowhtml')
    casesNumber.value = ''
}

const reDrawBoard = () => {
    createBoard()
}

const movePlayer = () => {
    document.addEventListener("keyup", function (e) {
        switch (e.key) {
            case 'ArrowDown':
                app.player.yPlayer += 1
                console.log("down")
                createBoard()
                break;
            case 'ArrowUp':
                app.player.yPlayer -= 1
                console.log("Up")
                createBoard()
                break;
            case 'ArrowLeft':
                app.player.xPlayer -= 1
                console.log("left")
                console.log(app.player.yPlayer)
                createBoard()
                break;
            case 'ArrowRight':
                app.player.xPlayer += 1
                console.log("right")
                console.log(app.player.yPlayer)
                createBoard()
                break;
        }
    })
}

document.addEventListener('DomContentLoaded', play())
movePlayer()