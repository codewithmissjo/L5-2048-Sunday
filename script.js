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
      $(`#row${r}`).append(`<div class="cell bg-secondary"></div>`);
      tiles[tiles.length - 1].push("1");
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

// document do the thing
//$(window).on('load', function(){});
$(document).ready(function(){
  init();
  console.log(tiles);
});
