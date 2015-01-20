
$(document).on('ready', function(){

	$('.apps input, .apps textarea').on('focus', function(){
		$(this).parent().addClass('focus');
	});
	$('.apps input, .apps textarea').on('blur', function(){
		$(this).parent().removeClass('focus');
	});

	$('.chat input').on('keyup', function(event){
		var val = $(this).val();

		if(event.keyCode === 13 && val !== '' && val !== ' ' && val !== '  '){
			$('.chat .messages').append('<br><li>'+ val +'</li>');

			if(val === 'konami code'){
				setTimeout(function(){
					$('.messages').append('<br><li class="other">Up, Up, Down, Down, Left, Right, Left, Right, B, A, Start</li>');	
				}, 500);
			}

			$(this).val('');
		}
	});

	var keys = {
		'113' : { es: 'q', ru: 'й', gr: ';'}, // q
		'119' : { es: 'w', ru: 'ц', gr: 'ς'}, // w
		'101' : { es: 'e', ru: 'у', gr: 'ε'}, // e
		'114' : { es: 'r', ru: 'к', gr: 'ρ'}, // r
		'116' : { es: 't', ru: 'е', gr: 'τ'}, // t
		'121' : { es: 'y', ru: 'н', gr: 'υ'}, // y
		'117' : { es: 'u', ru: 'г', gr: 'θ'}, // u
		'105' : { es: 'i', ru: 'ш', gr: 'ι'}, // i
		'111' : { es: 'o', ru: 'щ', gr: 'ο'}, // o
		'112' : { es: 'p', ru: 'з', gr: 'π'}, // p
		'91' : { es: '`', ru: 'х', gr: '['}, // [
		'93' : { es: '+', ru: 'ъ', gr: ']'}, // ]
		'97' : { es: 'a', ru: 'ф', gr: 'α'}, // a 
		'115' : { es: 's', ru: 'ы', gr: 'σ'}, // s 
		'100' : { es: 'd', ru: 'в', gr: 'δ'}, // d
		'102' : { es: 'f', ru: 'а', gr: 'φ'}, // f
		'103' : { es: 'g', ru: 'п', gr: 'γ'}, // g
		'104' : { es: 'h', ru: 'р', gr: 'η'}, // h
		'106' : { es: 'j', ru: 'о', gr: 'ξ'}, // j
		'107' : { es: 'k', ru: 'л', gr: 'κ'}, // k
		'108' : { es: 'l', ru: 'д', gr: 'λ'}, // l
		'59' : { es: 'ñ', ru: 'ж', gr: '΄'}, // ;
		'92' : { es: 'ç', ru: 'ё', gr: '\\'}, // \
		'122' : { es: 'z', ru: 'я', gr: 'ζ'}, // z
		'120' : { es: 'x', ru: 'ч', gr: 'χ'}, // x
		'99' : { es: 'c', ru: 'с', gr: 'ψ'}, // c
		'118' : { es: 'v', ru: 'м', gr: 'ω'}, // v
		'98' : { es: 'b', ru: 'и', gr: 'β'}, // b
		'110' : { es: 'n', ru: 'т', gr: 'ν'}, // n
		'109' : { es: 'm', ru: 'ь', gr: 'μ'}, // m
		'44' : { es: ',', ru: 'б', gr: ','}, // ,
		'46' : { es: '.', ru: 'ю', gr: '.'}, // .
		'47' : { es: '-', ru: '/', gr: '/'} // /
	};

	$('body').on('keypress', '.apps input, .apps textarea', function(event){
		if(keys[event.keyCode]){
			var letter = keys[event.keyCode][$(this).data('lang')];

			$(this).val(function(index, oldValue) {
			    return oldValue + letter;
			}); 
			event.preventDefault();
		}
	});

	// Analtics

	$('#button-download').on('click', function(){
		ga('send', 'event', 'button', 'click', 'download');
	});
	$('#button-github').on('click', function(){
		ga('send', 'event', 'button', 'click', 'github');
	});
	$('#button-donate').on('click', function(){
		ga('send', 'event', 'button', 'click', 'donate');
	});
	$('#button-email').on('click', function(){
		ga('send', 'event', 'button', 'click', 'email');
	});

	$('#santa-github').on('click', function(){
		ga('send', 'event', 'button', 'click', 'Santangelo', 'github');
	});
	$('#santa-twitter').on('click', function(){
		ga('send', 'event', 'button', 'click', 'Santangelo', 'twitter');
	});
	$('#rou-github').on('click', function(){
		ga('send', 'event', 'button', 'click', 'Rougier', 'github');
	});
	$('#rou-twitter').on('click', function(){
		ga('send', 'event', 'button', 'click', 'Rougier', 'twitter');
	});
});
