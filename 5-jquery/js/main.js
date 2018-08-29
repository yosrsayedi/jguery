
$("#bold").click(function(){
	$("#p").toggleClass("boldStyle");

});
$("#italic").click(function(){
	$("#p").toggleClass("italicStyle");
});
$("#underlined").click(function(){
	$("#p").toggleClass("underlineStyle");;
});

$("#pf").change(function(){
	var se =$("#pf").val();
	$("#p").css("fontFamily",se);
});
$("#ps").change(function(){
	var se =$("#ps").val();
	$("#p").css("fontSize",se);
});

/*setTimeout(function(){
	var couleur = prompt("Please enter a color");
  document.getElementById("p").style.backgroundColor=couleur;
}, 3000);




function bold(){
	
	 document.getElementById("p").classList.toggle("boldStyle");
}
function italic(){      
 
	document.getElementById("p").classList.toggle("italicStyle");

} 
function underline(){
	document.getElementById("p").classList.toggle("underlineStyle");
} =x;
}
function sfont(){
  var x= document.getElementById("ps").value;
 
  document.getElementById("p").style.fontSize =x+"px";

}


*/
