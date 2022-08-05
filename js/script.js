function btnRoma() {
	var dots = document.getElementById("dots.r");
	var moreText = document.getElementById("more.r");
	var btnText = document.getElementById("myBtn.r");
  
	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Ver mas";
		moreText.style.display = "none";
	  } else {
		dots.style.display = "none";
		btnText.innerHTML = "Ver menos";
		moreText.style.display = "inline";
	  }

  }

  function btnBrasil() {
	var dots = document.getElementById("dots.b");
	var moreText = document.getElementById("more.b");
	var btnText = document.getElementById("myBtn.b");
  
	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Ver mas";
		moreText.style.display = "none";
	  } else {
		dots.style.display = "none";
		btnText.innerHTML = "Ver menos";
		moreText.style.display = "inline";
	  }

  }

  function btnSort() {
	var dots = document.getElementById("dots.s");
	var moreText = document.getElementById("more.s");
	var btnText = document.getElementById("myBtn.s");
  
	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Ver mas";
		moreText.style.display = "none";
	  } else {
		dots.style.display = "none";
		btnText.innerHTML = "Ver menos";
		moreText.style.display = "inline";
	  }

  }