// variables
var tiles = [];

// functions
/*
[
[[],[],[],[]],
[[],[],[],[]],
[[],[],[],[]],
[[],[],[],[]]
]
*/
function init() {
  for (let r = 0; r < 4; r++) {
    // create a row and add it to the #grid
    $('#grid').append(`<div class="g-0" id="row${r}"></div>`);
    tiles.push([]);
    for ( let c = 0; c < 4; c++) {
      // create a cell and add it to the last row that was added to the #grid
      $(`#row${r}`).append(`<div class="cell bg-secondary">1</div>`);
      tiles[tiles.length - 1].push(new Tile());
    }

  }

  // make every cell a square!
  $(".cell").each(function(){
    let width = $(this)[0].offsetWidth;
    //console.log($(this))
    //console.log($(this)[0])
    $(this).css('height', width + "px");
  });
  
  
}



// Classes
function Tile() {
  this.value = 1;
}

function drawAlltiles(){
  for ( let a = 0; a < tiles.length; a++){
    for ( let b = 0; b < tiles[a].length; b++){
    
    }
  }
}


// document do the thing
//$(window).on('load', function(){});
$(document).ready(function(){
  init();
  console.log(tiles);
});
