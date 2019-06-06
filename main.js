// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked

$(document).on('click','.title', function() {
  $(this).siblings('.description').slideToggle('slow');
});


// 2. Remove each item when we click on the closing X
$(document).on('click','.close', function() {
 $(this).parent().remove();
});


// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items

$(document).on('click','.add', function() {
  //check if its blank, then set it accordingly
  var input = $('#newtitle').val() === '' ? 'Title ' + ($('.title').length+1) : $('#newtitle').val();
  $('.item-list').append(
    '<div class="item">' +
      '<h1 class="title">' + input + '</h1>' +
      '<span class="close">'+ 'x' +'</span>' +
      '<p class="description">' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.' +
      '</p>' +
    '</div>');
  $('#newtitle').val('');
});

//    Optional:
//    If the user clicks "Add New" and the input is empty,
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page
