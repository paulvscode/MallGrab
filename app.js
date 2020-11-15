const game = document.getElementById('game')

app = {
    row: 0,
    cell: 0,
}

const play = () => {
    app.row = document.getElementById('rowhtml').value
    app.cell = document.getElementById('rowhtml').value
    console.log(`on est dans la function, et le nombre de cases est ${app.row}`)
    createBoard();
}

const createBoard = () => {
    game.innerHTML = ''
    for (let i = 0; i < app.row; i++) {
        const createRow = document.createElement('div')
        createRow.className = 'row'
    
        for (let j = 0; j < app.cell; j++) {
            const createCell = document.createElement('div')
            createCell.className = 'cell'
            createRow.appendChild(createCell)
        }
    
        game.appendChild(createRow)
    }
}