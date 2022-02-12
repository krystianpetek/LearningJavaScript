document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const ScoreDisplay = document.querySelector('#score');
    const StartBtn = document.querySelector("#start-button");
    const width = 10;

    // the tetrominoes
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];
    const lTetrominoColor = 'red';
    const zTetromino = [
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1]
    ];
    const zTetrominoColor = 'green';
    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ];
    const tTetrominoColor = 'black';
    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ];
    const oTetrominoColor = 'blue';
    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ];
    const iTetrominoColor = 'white';
    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4;
    let currentRotation = 0;
    // randomly select a tetromino and its first rotation
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];

    let color;
    // draw the first rotation in the first tetromino
    function draw() {
        switch (random) {
            case 0:
                color = lTetrominoColor;
                break;
            case 1:
                color = zTetrominoColor;
                break;
            case 2:
                color = tTetrominoColor;
                break;
            case 3:
                color = oTetrominoColor;
                break;
            case 4:
                color = iTetrominoColor;
                break;
            default:
                '';
        }
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino', color);
        });
    }

    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino', color);
        });
    }

    // move down tetromino every seconds
    timerId = setInterval(moveDown, 1000);

    // assign functions to keyCode
    function control(e) {
        if (e.keyCode === 37)
            moveLeft();
        else if (e.keyCode === 38)
            rotate();
        else if (e.keyCode === 39)
            moveRight();
        else if (e.keyCode === 40)
            moveDown();
    }
    document.addEventListener('keyup', control);

    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    };

    // freeze function
    function freeze() {
        if (current.some(item => squares[currentPosition + item + width].classList.contains('taken'))) {
            current.forEach(item => squares[currentPosition + item].classList.add('taken'));
            random = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = 4;
        }
    };

    function moveLeft() {
        undraw();
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

        if (!isAtLeftEdge)
            currentPosition -= 1;

        if (current.some(index => squares[currentPosition + index].classList.contains('taken')))
            currentPosition += 1;
        draw();
    }
    function moveRight() {
        undraw();
        const isTheRightEdge = current.some(index => (currentPosition + index) % width === width-1)

        if (!isTheRightEdge)
            currentPosition += 1;

        if (current.some(index => squares[currentPosition + index].classList.contains('taken')))
            currentPosition -= 1;
        draw();
    }


    function rotate() {
        undraw();
        currentRotation++;
        if (currentRotation === current.length)
            currentRotation = currentRotation % current.length;
        current = theTetrominoes[random][currentRotation];

        // const isPossibleToRotate = current.some(index => (currentPosition + index) % width === 0)
        // if (isPossibleToRotate)
        //     currentPosition += 1;

        draw();
    }

});