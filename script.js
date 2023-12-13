const pad = document.querySelector('.main-container');
const reset = document.querySelector('.reset');
const colorPicker = document.querySelector('#colorPicker');
let gridNum = 16;

function addSquares() {
    const row = document.createElement('div');
    row.classList.add('row');
    pad.appendChild(row);


    for (let i = 0; i < gridNum; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        reset.addEventListener('click', function () {
            column.style.backgroundColor = 'white';
        })
        column.addEventListener('mousemove', (event) => {
            event.target.style.backgroundColor = colorPicker.value;
        });
        row.appendChild(column);
    }
    
};

function changeSize () {
    pad.innerHTML= '';
    gridNum = prompt('Enter a number between 0 and 100. (default will be 4)', '4');
    if (gridNum == '' || gridNum > 99 || gridNum < 1) {
        gridNum = 16;
    };
  
    padFill(gridNum);

};



function padFill(num) {
    for (let i = 0; i < num; i++) {
        addSquares()
    }
};

padFill(gridNum);



