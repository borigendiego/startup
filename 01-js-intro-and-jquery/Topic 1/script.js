/*5.	When the page has finished loading the section must fade in*/
/*$(document).ready(function() {
	$("p").hide(function() {
		$("p").fadeIn(1000);
	});
});*/

$( document ).ready(function() {
  $( "#textbox" ).focus();
});

$(document).ready(function() {
	$("section").show(function() {
		$("p").fadeIn(1000);
	});
});

/*function funcion()
{
var sectionColor = document.getElementById("section");
if (document.getElementById('alias').value==""
                 || document.getElementById('alias').value==undefined)
                {
                    sectionColor.style.backgroundColor = 'red';
                }
                else{
                  sectionColor.style.backgroundColor = 'blue';
                }*/