//on() is used when in potential future the event is to be added also it is used as shown below 
//("element which will always be there").on("event","element on which the evnet is to be heard"),function()...
$("ul").on("click","li",function(){
	$(this).toggleClass("litext");
});

//Click on X to delete tofo
//parent() gives the immediate parent of the html element..
$("ul").on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
});

//Creating new todo
//append() adds the html element to be added to a given parent elemen
$("input").on("keypress",function(e){
	if(e.which == 13)
	{
		//Grabbing new ToDo
		var toDoText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText+ "</li>");
		$(this).val("");
	}
});


$(".fa-plus").click(function(){
	$("input").fadeToggle();
});