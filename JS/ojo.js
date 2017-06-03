
var max=0;
var contador=0;
 var video = document.getElementById('video');

function textlist(){
	max=textlist.arguments.length; 
	for(i=0; i<max; i++){
		this[i]=textlist.arguments[i];
	}
}

tl = new textlist("Centra el ojo en la posicion indicada.");

var x=0; pos=0;
var l=tl[0].length;




function textticker(){
if(pos<l){
	document.getElementById('j2').innerHTML=tl[x].substring(0,pos)+"_";
}
else{
	document.getElementById('j2').innerHTML=tl[x].substring(0,pos);
}

if(pos++==l){
	pos=0;
	setTimeout("textticker()",1000);
	x++;
	if(x==max)
		contador++;
		x=0;
		if(contador==2){
			tl[0]="El análisis dará comienzo en 3 , 2 , 1"
		}
		if(contador==3){

			document.getElementById('myAudio').play();
			tl[0]="Realizando análisis . . . . . . . . . . ."
		}
		if(contador == 6){      
			tl[0]="Análisis finalizado, ya puedes mover la cabeza"
		}
		if(contador == 8){
			tl[0]="Procesando datos . . . . . . . . . . "
		}
		if(contador == 10){
			window.location="resultados.html";
		}

		l=tl[x].length;
} else

		setTimeout("textticker()",150);
	
}

textticker();