$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var danceHeight = function() {
      var downPercentage = 0.70
      var danceSpace = $("body").height() * (1 - downPercentage);
      danceSpace *= Math.random();
      danceSpace += ($("body").height() * downPercentage);
      return danceSpace
    }

    var dancer = new dancerMakerFunction(
      // var danceSpace = $("body").height() * 0.4;
      // danceSpace *= Math.random();
      // danceSpace += ($("body").height() * 0.60);

      //height(100%) - height(60%) = 40 * math.random
      // 60% height - 100%
      //Math.floor(Math.random() * (100% - 60% + 1) + 60*);
      //Math.floor(Math.random() * ( - 60% + 1) + 60*);,
      //Math.floor(Math.random() * ( $('body').height() - $('body').height() * .6) + 1)


      danceHeight(),
      $("body").width() * Math.random(),
      Math.random() * 900 + 100
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });
});

