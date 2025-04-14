
// function suma(){
    
//   try {
//     let a = parseInt(document.getElementById("valor1")).value || 0,
//     b = parseInt(document.getElementById("valor2")).value || 0;
//    document.getElementById("resul").value = a + b;

// } catch (e) {
    
//   }
// }

function suma(){
   var $total = document.getElementById('resul');
  var subtotal = 0;
  [...document.getElementsByClassName( "entrada" ) ].forEach( function ( element ) {
    if(element.value !== '') {
      subtotal += parseFloat(element.value);
    }
  });
  $total.value = subtotal  ;
}

function consistencia(){
 var w1 =  document.getElementById("ps1").value;
 var w2 =  document.getElementById("ps2").value;
 var w3 =  document.getElementById("ps3").value;


 document.getElementById("ppp").value = ((w3 - w1)/w2)*100;

}

// validacion de numeros //

jQuery(document).ready(function(){
	// Listen for the input event.
	jQuery("#ps1").on('input', function (evt) {
		// Allow only numbers.
		jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g, ''));
	});
});