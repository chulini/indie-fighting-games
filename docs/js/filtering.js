$(document).ready(function () {
  console.log('document ready')
  $('.grid').isotope({
    // options...
    itemSelector: '.game-box',
    layoutMode: 'fitRows'
  });

  $('#filters').on( 'click', 'button', function() {
    let clickedTagSlug = $( this ).attr('data-filter');
    console.log('onclick '+clickedTagSlug)
    UpdateSelectedTagsArray(clickedTagSlug);
    UpdateIsotopeGrid();
    RefreshView(clickedTagSlug);
  });

});



let selectedTags = [];
function UpdateSelectedTagsArray(clickedTagSlug){
  let indexOfTagInArray =  selectedTags.indexOf(clickedTagSlug);
  if(indexOfTagInArray === -1){ // Tags wasn't selected
    // Tag added
    selectedTags.push(clickedTagSlug);
  }
  else { // Tag was already selected
    // We remove the tag
    selectedTags.splice(indexOfTagInArray, 1)
  }
  console.log(selectedTags);
}
function UpdateIsotopeGrid(){
  let selector = "";
  for(let i = 0; i < selectedTags.length; i++){
    // if(i > 0){
    //   selector += ", "  ;
    // }
    selector += "."+selectedTags[i];
  }

  console.log(selector)
  $('.grid').isotope({
    filter: selector
  });
}
function RefreshView(clickedTagSlug){
  if(selectedTags.indexOf(clickedTagSlug) === -1){
    $('#button-'+clickedTagSlug).removeClass("is-checked")
  }
  else{
    console.log("index of tag "+clickedTagSlug+" = "+selectedTags.indexOf(clickedTagSlug))
    $('#button-'+clickedTagSlug).addClass("is-checked")
  }
  
}