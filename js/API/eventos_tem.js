//eventos de IGU
$(function(){

	document.addEventListener("deviceready",function(){

	$('#Nos').tap(function(){
		//alert('alerta tap');
		 console.log("alerta tap");//sobre consola
 
 		function conectado()
 		{

		 navigator.notification.beep(1);//plugin beep
		 if(estaConectado())
		{
			navigator.notification.alert(//plugin dialog
   				    'Conectado',  // message
   					 null,         // callback
    		    	'Conexio',            // title
    			    'ok'                  // buttonName
									 );
		}
		else{
			 navigator.notification.alert(//plugin dialog
   				    'desconectado',  // message
   					 null,         // callback
    		    	'no conexion',            // title
    			    'ok'                  // buttonName
									 );
		    }
		}
		 navigator.notification.beep(1);//plugin beep
		 // Vibrate for 3 seconds
		 navigator.vibrate(1000);//vibrar 1000ms

		 function llamar_dispositivo()
		 {
		 	var arr2=[];
		 	arr2=disp();
		 		 navigator.notification.alert(//plugin dialog
   				   arr2['modelo']+" "+arr2['phonegap']+" "+arr2['plataforma']+
   				   arr2['id']+" "+arr2['version']+" "+arr2['nombre'],  // message
   					 conectado,         // callback
    		    	'Dispositivo',            // title
    			    'ok'                  // buttonName
									 );
		


		 }


		 function llamada()
		 {

		 	navigator.notification.confirm(
    		'Ver dispositivo', // message
    		 llamar_dispositivo,            // callback to invoke with index of button pressed
    		'Ver datos de dispositivo',           // title
   		   ['ok','Exit']     // buttonLabels
											);

		 }


		 navigator.notification.alert(//plugin dialog
   				    'You are the UPAM!',  // message
   					 llamada,         // callback
    		    	'Game Over',            // title
    			    'Done'                  // buttonName
									 );
	});




	}, false);
});

