$(document).ready( function(){
  //***** listen on input focus / user input *****
  $('#search').on('keyup focus', () => {
    //save user input
    let search = $('#search').val().toUpperCase();
    let notFound = 0;
    const $notFoundText = "<h2 class='notfound'>Whoops, looks like there's nothing here!</h2>";
    $('.notfound').remove();//so only one not found text remains after loop
    //***** loop through all a tags*****
    $('.gallery').each( (i, img) => {
      //save captions
      let string = $('.gallery')[i].getAttribute('data-sub-html').toUpperCase();
      //if caption contains words from user input
      if (string.indexOf(search) > -1){
        //show image
        $('.gallery')[i].style.display = "block";
      } else { //else hide image
        $('.gallery')[i].style.display = "none";
        notFound++;
          //if search input does not match captions at all
          if (notFound >= $('.gallery').length) {
            //add not found text
            $('.container').append($notFoundText);
            document.querySelector('.container').style.padding = "20px";
          }
      } //***** OMG IT WORKED! *****
    });// ---loop end---

  });
});
