$(document).ready(function() {
  $('.lineUpButton').on('click', function(event) {
    var rate = 100 / window.dancers.length;
    var current = 0;

    window.dancers.forEach(function(dancer) {
      dancer.animate({
        top: '50%',
        left: current +'%'
      });

      current += rate;
    });
  });
});