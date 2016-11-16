'use strict';

$("button").click(function(){
  $("#info").empty();
  for(var i = 0; i < 30; i++) {
    var color; 
    if (i%5 === 1) {
      color = 'red';
    } else if (i%5 === 2) {
    color = 'blue';
    } else if (i%5 === 3) {
      color = 'yellow';
    } else if (i%5 === 4) {
      color = 'purple';
    } else if (i%5 === 0) {
      color = 'green';
    } else {
      color= 'black';
    }
    //var idName = "box"+i;
    var box = $('<div onclick="whenClicked(this)"></div>');
    $('#info').append(box);
    $(box).css("display", "block");
    $(box).css("background-color", color);
    }
});

var whenClicked = function(item) {
    $(item).fadeOut();
};

