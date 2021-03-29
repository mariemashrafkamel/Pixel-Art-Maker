// Select color input

// Select size input

//var button_submit=document.getElementById('submits');
//var tablee=document.getElementById('pixelCanvas');
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()

function makeGrid() {
var body = document.getElementsByTagName("body")[0];
let h=document.querySelector('#inputHeight').value;
let w=document.querySelector('#inputWidth').value;

  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
  // creating all cells
  for (var i = 0;i <h ;i++) {
    // creates a table row
    let row = document.createElement('tr');
    pixelCanvas.appendChild(row);

    for (var j=0 ; j<w ; j++) {
      let columncell = document.createElement('td');
      row.appendChild(columncell);
      columncell.addEventListener('mousedown', function() {
        const color = document.querySelector('#colorPicker').value;
        this.style.backgroundColor = color;
      })
    }
  }
  
}
makeGrid(5, 5);

sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid();
});

