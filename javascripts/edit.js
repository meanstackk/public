$(document).ready(function(){
	// alert("h1");
	$(".delete").click(function(){
		// alert("clicked");
		var id=$(this).val();
		// alert(id);
		$.post("/remove",{no:id},function(data){
			location.reload('/');
		});
	});
});