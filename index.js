

function handleClick(){
	var text = $(this).text()
	alert(text)
}

/*anonymus function*/
$(document).ready(function(){
	$(".panel").click(handleClick)

})