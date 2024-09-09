var foldBtns = document.getElementsByClassName("fold-button");
for (var i = 0; i<foldBtns.length; i++){
	foldBtns[i].addEventListener('mousedown', function(event) {
	if(event.target.parentElement.className == "one-post"){
		event.target.parentElement.className = "one-post-folded";
		event.target.innerHTML = "Развернуть";
	}
	else if(event.target.parentElement.className == "one-post-folded"){
		event.target.parentElement.className = "one-post";
		event.target.innerHTML = "Свернуть";
	}
});
}

