$(document).ready(function() {
  $('.form__input').on('focus', function() {
    if ($('.form').hasClass('form__error')) {
      $('.form').removeClass('form__error');
      $('.form__error-mess').text('');
    }
  });
  $('.form').on('submit', function(event) {
    event.preventDefault();
    const val = $('.form__input').val();
    const messField = $('.form__error-mess');
    let message = '';

    if (val === '') {
      message = 'Это поле обязательно для заполнения';
      $(this).addClass('form__error');
    } else if (
      !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
        val
      )
    ) {
      message = 'Некоректный email';
      $(this).addClass('form__error');
    } else {
      $('.modal').addClass('active');
    }

    messField.text(message);
  });

  $('.modal__close').on('click', function(event) {
    $('.modal').removeClass('active');
    $('.form__input').val('');
  });
});
