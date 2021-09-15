var state = false
function toggle(){
	if (state){
		document.getElementById('password').
		setAttribute("type", "password");
		state = false
	}
	else{
		document.getElementById('password').
		setAttribute("type", "text");
		state = true
	}
}