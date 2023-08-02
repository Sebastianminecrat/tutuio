function fuelsandwich(){
    navigator.mediaDevices.getUserMedia({ audio: true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2MW1UornF/model.json", stark)
}
function stark(){
classifier.classify(torito);

}
function torito (
 error,lysomusil
){
if (error) {
  console.log(error)  
} else {
console.log(lysomusil);
document.getElementById("bambambambambu").innerHTML="dale click aqui para conocer a tu youtuber favorito" +lysomusil[0].label;
document.getElementById("bombombombomba").innerHTML="dale click aqui para conocer a tu ticktock favorito" +lysomusil[0].confidence;
magaldrato_ñolo1=document.getElementById("quequequequeque");
magaldrato_ñolo2=document.getElementById("demdemdemdemdem");
magaldrato_ñolo3=document.getElementById("samsamsamsamsam");
magaldrato_ñolo4=document.getElementById("camcamacamcambu");
if(lysomusil[0].label=="diamante"){
  magaldrato_ñolo1.src="aliens-01.gif";
  magaldrato_ñolo2.src="aliens-02.png";
  magaldrato_ñolo3.src="aliens-03.png";
  magaldrato_ñolo4.src="aliens-04.png";
}
else if(lysomusil[0].label=="oro"){
  magaldrato_ñolo1.src="aliens-01.png";
  magaldrato_ñolo2.src="aliens-02.gif";
  magaldrato_ñolo3.src="aliens-03.png";
  magaldrato_ñolo4.src="aliens-04.png";
}
else if(lysomusil[0].label=="plata"){
  magaldrato_ñolo1.src="aliens-01.png";
  magaldrato_ñolo2.src="aliens-02.png";
  magaldrato_ñolo3.src="aliens-03.gif";
  magaldrato_ñolo4.src="aliens-04.png";
}
else if(lysomusil[0].label=="BackgroundNoise"){
  magaldrato_ñolo1.src="aliens-01.png";
  magaldrato_ñolo2.src="aliens-02.png";
  magaldrato_ñolo3.src="aliens-03.png";
  magaldrato_ñolo4.src="aliens-04.gif";
}
}

}


