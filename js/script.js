var methods = document.getElementsByClassName('symbol');
var i;

for (i = 0; i < methods.length; i++) {
  methods[i].onclick = function()  {
    if (this.innerHTML == '+') {
      this.innerHTML = '&minus;';
    } else if (this.innerHTML == '−') {
      this.innerHTML = '&plus;';
    }
    this.nextElementSibling.classList.toggle('expand');
  }
}

(function($) {  
  $('#contact-form').height($(window).height());
  $('#contact-info').height($(window).height());
  
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    var valid = true;
    if ($('input[name=name]').val() == null || $('input[name=name]').val() == '') {
      valid = false;
      $('#contactForm').before('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Error!</strong> User input <em>name</em> is not valid.</div>');
    }
    if ($('input[name=email]').val() == null || $('input[name=email]').val() == '') {
      valid = false;
      $('#contactForm').before('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Error!</strong> User input <em>email</em> is not valid.</div>');
    }
    if (valid) {
      $('#contact-form').html('<h2 style="text-align:center">Thank you for your message! :D</h2>');
    }
  });
})(jQuery);