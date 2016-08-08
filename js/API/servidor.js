//servidor
function enviarDatos(nom,mail,tel,foto){
	$.ajax({
		type: "POST",
		url: "http://testmovil.azurewebsites.net/test2.php",
		data: "nom="+nom+"&mail="+mail+"&tel="+tel
	}).done(function(msg){
		if(msg==1){
			$('.title div').text('Subiendo Foto');
			subirFoto(foto);	
		//navigator.notification.alert("ok enviado"+msg,null,"ok","Aceptar");
		
		}else{
			navigator.notification.alert("Hubo un error en el registro"+msg,null,"Error","Aceptar");
		}
	});
}

function enviarReservas(th,pr,ha,di){
	alert(0);
	$.ajax({
		type: "POST",
		url:"http://testmovil.azurewebsites.net/test3.php",
		data: "t="+th+"&p="+pr+"&h="+ha+"&d="+di
	}).done(function(msg) {
		if(msg==1){
			navigator.notification.alert("Datos Enviados Correctamente",function(){
				crearHistorial(th,pr,ha,di);
			},"Reserva Realizada","Aceptar");	
		}else{
			navigator.notification.alert("Hubo un error en el registro",null,"Error","Aceptar");
		}
	});
}