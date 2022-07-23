(function()){//encerrar la funcion en() para proger el codigo
	var formulario = document.getElementById('formulario'), //se toma la informacion del id=formulario en html
	//se declara las variables de acuerdo a la class=formulario con cada name en el html
		 nombre = formulario.nombre,
		 correo = formulario.correo,
		 sexo = formulario.sexo,
		 terminos = formulario.terminos,
		 //se declara la variable error con el id=error del html
		 error = document.getElementById('error');
		 //se crean las funciones para cada dato: nombre, correo, sexo, terminos
	function validarNombre(e){ //se escribe el paramentro e para que funcione e.preventDefault(
		//alert('hola');
		 //esta funcion valida que si el campo de nombre esta vacio muestra un mensaje de error
		if (nombre.value == '' || nombre.value == null){ //aplica la condicion si el valor del campo nombre este vacio
		 	console.log('Por favor complete el nombre'); //mensaje
		 	error.style.display = 'block'; //modifica la propiedad display que oculta el bloque de errores y ahora mostrarlo
		 	error.innerHTML +=  '<li>Por favor complete el nombre</li>'; //muestra en pantalla el error + en el siguente

		 	e.preventDefault(); //utiliza el parametro e para que cuando este vacio el campo nombre mande el error
		 	}else{
		 		error.style.display = 'none';
		 	}	
		}
		//esta funcion valida que si el campo de correo este vacio muestre un mensaje de error
		function validarCorreo(e){ //se escribe el paramentro e para que funcione e.preventDefault(
		//alert('hola');
		 //esta funcion valida que si el campo de correo esta vacio muestra un mensaje de error
		if (correo.value == '' || correo.value == null){ //aplica la condicion si el valor del campo correo este vacio
		 	console.log('Por favor complete el correo'); //mensaje
		 	error.style.display = 'block'; //modifica la propiedad display que oculta el bloque de errores y ahora mostrarlo
		 	error.innerHTML +=  '<li>Por favor complete el correo</li>'; //muestra en pantalla el error + en el siguente

		 	e.preventDefault(); //utiliza el parametro e para que cuando este vacio el campo correo mande el error
		 	}else{
		 		error.style.display = 'none';
		 	}
		 }
		 //	para las siguientes funciones aplican llos mismos comentarios que las funciones anteriores
		 function validarsexo(e){
		 	if (sexo.value == '' || sexo.value == null) {
		 		console.log('Por favor complete el sexo');
		 		error.style.display = 'block';
		 		error.innerHTML +=  '<li>Por favor complete el sexo</li>';

		 		e.preventDefault();
		 	}else{
		 		error.style.display = 'none';
		 	}
		 }

		 function validarterminos(e){
		 	if(terminos.checked ==false){
		 		console.log('Por favor acepta los terminos');
		 		error.style.display = 'block';
		 		error.innerHTML += '<li>Por favor acepta los terminos</li>';

		 		e.preventDefault();
		 	}else{
		 		error.style.display = 'none';
		 	}
		 }
		 //la funcion validarfomulario llama a las funcones que vaidan los espacios sin llenar
		 function validarFormulario(e){
		 	error.innerHTML = '';

		 	validarNombre(e); //se llama a la funcion que valida el llenado del nombre
		 	validarCorreo(e); //se llama a la funcion que valida el llenado del correo
		 	validarsexo(e);   //se llama a la funcion que valida el llenado del sexo
		 	validarterminos(e); //se llama a la funcion que valida el llenado del terminos

		 }
		 //la siguiente linea llama a la funcion validarFormulario al momento de presionar el boton
		 formulario.addEventListener('submit', validarFormulario);
	}()
