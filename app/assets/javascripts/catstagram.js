/* prevents code from running until all of the HTML elements have been loaded
 into the DOM (onto the page). */

$(document).ready(function() {
  /* find all of the elements on the page that have  data-meow-button attribute
  and listen for the submit event. when submit occurs run anonymous function
  passing in the submit event itself as an argument. prevent default where
  default would cause the page to refresh*/
  $('[data-meow-button="create"]').on('submit', function(event) {
    event.preventDefault();
    /* event.currentTarget is used to find the element that is the target of
    the event that is passed into the function. we wrap it in $() so that we get
    the jQuery object version of the DOM element. it's stored in the form
    variable pre-fixed with $ because that is the convention for signifying that
    the variable contains a jQuery object. */
    $form = $(event.currentTarget);

    /* now that form is stored in variable we can send an ajax request in the
    background using it's attributes using jQuer's $.ajax() function. This will
    cause a POST request to be sent to /posts/:post_id/meows, which maps our
    meows#create action  */
    $.ajax({
      type: "POST",
      url: $form.attr('action'),
      dataType: "json"
    });
  });
});
