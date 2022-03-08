let loginForm = document.getSelection('.login-form');
let btnLoginRegister = document.querySelector('.login-register-btn');
let navbar = document.querySelector('.nav');
let menu = document.querySelector('#menu-bar');

// btnLoginRegister.onclick = () => {
// 	loginForm.classList.add('active');
// }

// document.querySelector('.close-login-form').onclick = () => {
// 	loginForm.classList.remove('active');
// }

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

window.onscroll = () => {
  // loginForm.classList.remove('active');
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');  

	// if (window.scrollY > 0) {
	// 	document.querySelector('.header').classList.add('active');
	// }else{
	// 	document.querySelector('.header').classList.remove('active');
	// }
}
