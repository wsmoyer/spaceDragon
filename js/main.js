$(document).ready(function() {
  (function($) {
    'use strict';

    var $slides = $('[data-slides]');
    var images = $slides.data('slides');
    var count = images.length;
    var slideshow = function() {
      $slides
        .css(
          'background-image',
          'url("' + images[Math.floor(Math.random() * count)] + '")'
        )
        .show(0, function() {
          setTimeout(slideshow, 3000);
        });
    };

    slideshow();
  })(jQuery);
  var acc = document.getElementsByClassName('accordion');
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
      this.classList.toggle('active');

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  }
});
