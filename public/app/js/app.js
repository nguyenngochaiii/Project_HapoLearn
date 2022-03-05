let navbar = document.querySelector('.nav');
let menu = document.querySelector('#menu-bar')

menu.onclick = () => {
	menu.classList.toggle('fa-times')
	navbar.classList.toggle('active');
}

window.onscroll = () => {
	menu.classList.remove('fa-times')
	navbar.classList.remove('active');

	if (window.scrollY > 0) {
		document.querySelector('#header').classList.add('active');
	}else{
		document.querySelector('#header').classList.remove('active');
	}
}
