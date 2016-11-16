function generateBoxes() {


  var content = "";

  var classes =['blue', 'red', 'green', 'yellow', 'purple'];

  for (var i = 0; i < 30; i++) {
    content += '<div onclick="removeBox(this)" class="' + classes[i%5] + '">test</div>'
  }

  $('#container').html(content);
}

function removeBox(element) {
  $(element).fadeOut();
}
