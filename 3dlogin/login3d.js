var login = document.getElementById('login');
var signup = document.getElementById('signup');
var show_signup = document.getElementById('show_signup');
var show_login = document.getElementById('show_login');

show_signup.addEventListener('click',function(){
	login.classList.remove('active');
	signup.classList.add('active');
})
show_login.addEventListener('click',function(){
	signup.classList.remove('active');
	login.classList.add('active');
})