$(document).ready(function() {
    $("#lightGallery").lightGallery();
    $("#searchBox").keyup(function(){
      var filter = $(this).val();
      $(".image").each(function(){

        // If the div item does not contain the text phrase fade it out
        if ($(this).attr('title').search(new RegExp(filter, "i")) < 0) {
            $(this).fadeOut();

        // Show the div item if the phrase matches
        } else {
            $(this).show();
        }
     });
  });
});
