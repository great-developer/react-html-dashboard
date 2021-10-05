$(function () {
	if(!localStorage.getItem('wallet')) {
		$('.content-1').show();
		$('.content-2').hide();
	} else {
		$('.content-2').show();
		$('.content-1').hide();
	}

	$('.qr-device').click(function () {
		$('.device-section').slideToggle();
	});

	$('.create-btn').click(function () {
		var checked = $('.form-check-input').prop('checked');
		var password = $('.password').val();
		var rpassword = $('.rpassword').val();

		if(password.length >= 8 && password == rpassword && checked) {
			$(this).attr('data-dismiss', 'modal');
			$('#seed-modal').modal('show');
		} else if (password == '' || rpassword =='') {
			$('.error-msg').show();
			$('.error-msg').text('Please fill password');
		} else if(password != rpassword) {
			$('.error-msg').show();
			$('.error-msg').text('Please enter the same password twice');
		} else if(password.length < 8) {
			$('.error-msg').show();
			$('.error-msg').text('Please fill minimun 8 characters in password');
		} else if(!checked) {
			$('.error-msg').show();
			$('.error-msg').text('Please agree to the terms of use');
		}
	});

	$('.seed-btn').click(function () {
		$('#seed-modal').modal('hide');
		localStorage.setItem('wallet', 'setted');
		$('.content-2').show();
		$('.content-1').hide();
	});

	$('.dash-input').keyup(function() {
		$('.usd-input').val( 174.99 * $('.dash-input').val());
	});

	$('.usd-input').keyup(function() {
		$('.dash-input').val( ($(this).val()/174.99).toFixed(4));
	});

	$('.next-btn').click(function () {
		$('.next-error-msg').show();
	})

	$('.nav-menu').click(function () {
		event.preventDefault();
		$('body').toggleClass('wrapped-sidebar');
	})
});