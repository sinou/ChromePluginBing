$(document).ready(function () {
 if ($(location).attr('href').indexOf("free_points") >= 0){
window.open('','_self').close();//closes every tab that opens, chrome only allows scripts to close the tabs they open
}						// 
 setTimeout(function(){
  if ($(location).attr('href').indexOf("free_points") >= 0){
	$("#id_rh").trigger("click");
	$("body").prepend("<div>"+
	"<button id = 'evil_button' type='button' >Get Points!</button>" +"</div>")
  }
   $("#evil_button").click(function(){
		var url = "http://www.bing.com/search?q=";
		//window.location = url + Math.random() ;
		for(i = 0; i < 90; i++){
			var win = window.open(url + Math.random() + "&free_points=true", '_blank');
			win.focus();
		}
		
  });
}, 2000);
 
  
});
