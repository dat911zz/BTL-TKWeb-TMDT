// ======================================================
// Animation
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// ======================================================
// Process data
var r_submit = document.getElementById("r-b");
var r_email = document.getElementById("r-i-email");
var r_pass = document.getElementById("r-i-pass");
var r_err_e = document.getElementById("r-errEmail");
var r_err_p = document.getElementById("r-errPass");

var l_submit = document.getElementById("l-b");
var l_email = document.getElementById("l-i-email");
var l_pass = document.getElementById("l-i-pass");


function redirectHome() {
	window.location.href="./index.html";  
  }

r_submit.onclick = (e) => {
	e.preventDefault()
	if (r_email.value == '' && r_pass.value == '') {
		alert("Vui lòng nhập thông tin!");
	}
	else{
		var cE = checkEmail(r_email);
		var cP = checkPass(r_pass);
		
		if(cE == false){
			r_err_e.style.display = 'block';
			r_email.focus();
		}
		else{
			r_err_e.style.display = 'none';
		}

		if(cP == false){
			r_err_p.style.display = 'block';
		}
		else{
			r_err_p.style.display = 'none';
		}

		if(cE && cP){
			sessionStorage.account = r_email.value;
			sessionStorage.pass = r_pass.value;
			alert("Đã đăng ký tài khoản thành công!");
			container.classList.remove("right-panel-active");
		}
	}

}
l_submit.onclick = (e) => {
	e.preventDefault()
	if (l_email.value == sessionStorage.account) {
		if (l_pass.value == sessionStorage.pass) {
			document.querySelector(".LoginForm").action = "./index.html";
			document.querySelector(".RegisterForm").action = "./index.html";
			console.log(this);
			redirectHome();
		}
		else {
			alert("Sai mật khẩu! Vui lòng nhập lại !");
		}
	}
	else {
		alert("Không tìm thấy tài khoản!");
	}
}
function checkEmail(email) {
	if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))) {
		return false;
	}
	return true;
}
function checkPass(pass) {
	if(pass.value.length <= 10) {
		return false
	}
	return true;
}