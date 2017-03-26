$(document).ready(function () {
  // $('.menu-item').click(function() {
  //      $(this).toggleClass('active');
  // });




  $('.more-content').hide()

  $('.read-more').click(function () {
    console.log('loaded')
    // get text in button
    var buttonText = $(this).text()
    console.log(buttonText)
    // // conditional
    if (buttonText.includes('more')) {
      // change text to read less
      $(this).text("Read less")
      // show paragraphs
      $(this).siblings('.more-content').show()
    } else {
      // change text to read more
      $(this).text("Read more")
      // hide paragraphs
      $(this).siblings('.more-content').hide()
    }
  })
})


// var $readMore = $('.read-more')
// var $readLess = $('.readLess')
// var $readMoreContent = $(.read-more-content')
//
// $readMore.click (showReadMore)
//
// function showReadMore () {
//   $readMore.hide()
//   $readLess.show()
//   $readMoreContent.slideToggle ()
// }
//
//
//
// function toggleAnswer1() {
//   $('#text-article1').slideToggle();
// }
// function toggleAnswer2() {
//   $('#text-article2').slideToggle();
// }
// function toggleAnswer3() {
//   $('#text-article3').slideToggle();
// }
// $('#text-article1').hide();
// $('#text-article2').hide();
// $('#text-article3').hide();
// $("#readMore1").click(toggleAnswer1);
// $('#readMore2').click(toggleAnswer2);
// $('#readMore3').click(toggleAnswer3);
