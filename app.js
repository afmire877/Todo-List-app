var del = document.querySelectorAll("span");
var lis = document.querySelectorAll('li');

for (var i = 0; i <= del.length ; i++){
	del[i].addEventListener("click",function() {
		console.log("clicked")
		lis[i].removeChild(lis[i]);
	});
}
