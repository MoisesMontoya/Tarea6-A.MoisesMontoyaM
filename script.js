
function myFunction() {
  // Get the value of the input field with id="palabra"
  let x11 = document.getElementById("nombre").value;

  let x1 = document.getElementById("control").value;
  const regex = /^[\s | m | c]([0-9]{2}(120|121)[0-9]{3})$/i;

  if (regex.test(x1)) {
    
  }
  else {
    text="Control no valido";
  }

  document.getElementById("valida_control").innerHTML = text;

  // Get the value of the input field with id="numero"
  let x2 = document.getElementById("rfc").value;
  const regex2 = /^([A-Za-z]{4}([0-9]{2})(0([0-9]{1})|1([0-2]{1}))([0-9]{2})...)$/i

  if (regex2.test(x2)) {
    
  }
  else {
    text="RFC no valido";
  }
  let length = x2.length;
  let result = x2.slice(4,10);

  document.getElementById("valida_rfc").innerHTML = result;


  // numero 3
  let x3 = document.getElementById("tele").value;
  const regex3 = /^(443)[0-9]{7}$/i

  if (regex3.test(x3)) {
    
  }
  else {
    text="Numero no valido";
  }

  document.getElementById("valida_tel").innerHTML = text;

  // numero 4

  let x4 = document.getElementById("correo").value;
  const regex4 = /^(l)[0-9]{2}(120)[0-9]{3}@morelia.tecnm.mx$/i

  if (regex4.test(x4)) {
    
  }
  else {
    text="Numero no valido";
  }

  document.getElementById("valida_correo").innerHTML = x4;

  let length1 = x4.length;
  let result1 = x4.slice(1,7);







  if (regex4.test(x4) && regex3.test(x3) ) {
    textoo="Usuario Verificado:"+x11+" nacido en "+result;
}
document.getElementById("validacion").innerHTML = textoo;

}




//document.write("jksdkjdskjds");

