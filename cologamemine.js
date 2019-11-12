var num=6;
var colorarr= choosecolor(num);
var squares=document.querySelectorAll(".square");
var pickedcolor= pickcolor(num);
var resetbutton= document.querySelector("#reset");
var btneasy= document.querySelector("#btneasy");
var btnhard= document.querySelector("#btnhard");
var headline=document.querySelector("#headline");

headline.textContent = pickedcolor;
var message=document.querySelector("#message");
var h1=document.querySelector("h1");

btneasy.addEventListener("click",function() {
	btneasy.classList.add("selected");
	btnhard.classList.remove("selected");
	h1.style.backgroundColor= "steelblue";
	resetbutton.textContent= "new colors";
	message.textContent= "";
    num=3;
    colorarr= choosecolor(num);
    pickedcolor=pickcolor(num);
    console.log(pickedcolor);
    headline.textContent = pickedcolor;
    for(var i = 0; i < squares.length; i++){
	if(colorarr[i]){
      squares[i].style.backgroundColor=colorarr[i];
	}
	else{
		squares[i].style.display="none";
	} }


});

btnhard.addEventListener("click",function() {
	btneasy.classList.remove("selected");
	btnhard.classList.add("selected");
	h1.style.backgroundColor= "steelblue";
	resetbutton.textContent= "new colors";
	message.textContent= "";
    num=6;
    colorarr= choosecolor(num);
    pickedcolor= pickcolor(num);
     headline.textContent = pickedcolor;
   for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor=colorarr[i];
	squares[i].style.display="block"; }

});

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor=colorarr[i];

	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor===pickedcolor){
			message.textContent= "correct";
			correctcolor(pickedcolor);
			h1.style.backgroundColor= pickedcolor;
			resetbutton.textContent= "play again?";
		}
		else{

			this.style.backgroundColor= "#232323";
			message.textContent= "try again";
		}
	});
}
resetbutton.addEventListener("click",function(){
	resetbutton.textContent= "new colors";
	message.textContent= "";
 colorarr= choosecolor(num);
 pickedcolor= pickcolor(num);
headline.textContent = pickedcolor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor=colorarr[i]; }
h1.style.backgroundColor= "steelblue";
});

function correctcolor(color){
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor=color; 
}
}

function pickcolor(num){
	var index= Math.floor(Math.random()*num);
	return colorarr[index];
}

function choosecolor(num){
	var arr=[];
	for(i=0; i<num; i++){
		arr.push(rgbcolor());
	}
	return arr;
}

function rgbcolor(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return ("rgb("+ r +", " + g +", " + b +")");
}
