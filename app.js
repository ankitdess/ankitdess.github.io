
const input=document.querySelectorAll('[data-input]');
const text=document.getElementById("num");/*output variable*/
const butt1= document.querySelectorAll('[data-butt]');
const butt2= document.getElementById("clear");
var inch1;
var inch2;
var feet1;
var feet2;
var sums=0;
var sum;



/*Clears all the value in input element*/


butt1.forEach(but=>{

    but.addEventListener("click",()=>{
        if((input[0].value === "")||(input[1].value === "")||(input[2].value === "")||(input[3].value === "")){
            alert("Enter all values");   
        }
        else{
        inch1=input[1].value/12;
        inch1= parseFloat(inch1.toString().slice(0,4));
        inch2=input[3].value/12;
        inch2= parseFloat(inch2.toString().slice(0,4));
        
        feet1= input[0].value;
        feet2= input[2].value;
        feet1=parseFloat(feet1);
        feet2=parseFloat(feet2); 
        sums=sums+(feet1+inch1) * (feet2+inch2);
        
        sum=parseFloat(sums).toFixed(2);
        text.innerHTML=sum;
        }
    })
})

butt2.addEventListener("click",()=>{
    input.forEach(inp=>{
        inp.value="";
    })
})