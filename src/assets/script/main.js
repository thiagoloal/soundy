import jQuery from 'jquery';

// export for others scripts to use
window.$ = jQuery;
window.jQuery = jQuery;

// function buildSoundy(snd, parent) {
// 	const audio = $(`<audio id="audio${snd.id}"></audio>`);
// 	snd.src.forEach((a) => {
// 		audio.append($(`<source src=${a.url} type="audio/${a.type}">`));
// 	});
// 	parent.append(audio);
// 	// snd.bkColor ? parent.css("color", snd.bkColor) : '';
// 	parent.css('background-color', `${snd.background}`);
// 	parent.css('border-bottom', `2px solid ${snd.background}`);

// }

/*eslint-disable */
// function playSoundy(obj, idx) {
// 	$(obj).css('background-color', 'none');
// 	let cont = 0;
// 	const interval = setInterval(() => {

// 		if ((cont) <= 100) {
// 			$(obj).css('background', `linear-gradient(to right,
// 					${window.soundy[idx].background} ${cont}%, rgba(255, 255, 255, 0) ${cont}%)`);
// 			cont = cont + 1;
// 		} else {
// 			clearInterval(interval);
// 		}

// 	}, 100);
// }
/*eslint-enable */

function initSoundy() {
	window.soundy = [];
	$('.soundy').each((idx, obj) => {
		const $this = $(obj);
		const snd = {};
		const sound = $this.text().split('||');
		$this.text(sound[0]);

		sound.forEach((a) => {
			snd[a.split(':')[0]] = a.split(':')[1];

		});
		console.log(snd);
		// const sound = {
		// 	id: idx,
		// 	text: $this.html(),
		// 	src: $this.data('src'),
		// 	background: $this.data('bk') ? $this.data('bk') : '#ccc',
		// 	color: $this.data('color') ? $this.data('color') : '',
		// 	begin: $this.data('initTime') ? $this.data('initTime') : '0',
		// 	duration: $this.data('duration') ? $this.data('duration') : '1',
		// };
		window.soundy.push(snd);
		// buildSoundy(sound, $this);
		// $(obj).on('click', function play() {
		// 	playSoundy(this, idx);
		// });
	});

}

$('.loading').hide();
$(document).ready(() => {
	initSoundy();
});
