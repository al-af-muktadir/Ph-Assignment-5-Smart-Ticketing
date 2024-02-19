document.getElementById('Phone').addEventListener("keyup",function(event){
    let phone=parseInt(event.target.value);
   console.log(typeof phone);
     if(typeof phone==="number"){
       const next =document.getElementById("Next");
       next.removeAttribute("disabled");
   
      }
    })
 


 function Success(){
    const head=document.getElementById('head');
    const banner=document.getElementById('banner-section');
    const bookings=document.getElementById('booking');
    const foot=document.getElementById('footer');
    const pops=document.getElementById('popup');
    const Coupons=document.getElementById('coupon');
    const vehicles=document.getElementById('paribahan');

    pops.classList.remove("hidden");
    Coupons.classList.add("hidden");
    vehicles.classList.add("hidden");
    head.classList.add("hidden");
    banner.classList.add("hidden");
    bookings.classList.add("hidden");
    foot.classList.add("hidden");
  
}
let flag=4;
let Count=0;
let Coupon1="New15";
let Coupon2="Couple 20";
function setBgColor(ElementId){

 
if(Count<flag){
    const bgColorId=document.getElementById(ElementId);
    console.log(bgColorId);
bgColorId.removeAttribute('disabled');
bgColorId.classList.add('bg-green-500');
bgColorId.setAttribute('disabled',true);


const ReducingBadgeId=document.getElementById("reducing-badge");
let intValueOfBadge1=parseInt(ReducingBadgeId.innerText);
intValueOfBadge1--;
ReducingBadgeId.innerText=intValueOfBadge1;
//  adding in small badge
const addingBadgeId=document.getElementById("adding-badge");
let intValueOfBadge2=parseInt(addingBadgeId.innerText);
intValueOfBadge2++;
addingBadgeId.innerText=intValueOfBadge2;
//adding in table
const tb=document.getElementById("table-body");
let tr=document.createElement("tr");
let td1=document.createElement("td");
let td2=document.createElement("td");
let td3=document.createElement("td");
td1.innerText=document.getElementById(ElementId).innerText;
td2.innerText="Economy";
td3.innerText="550";
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tb.appendChild(tr);

CountingTotal();
Count++;

if(Count==4){
  const getCoupon=document.getElementById('apply-coupon');
 getCoupon.removeAttribute('disabled');


}
}
else{
    const bgColorId=document.getElementById(ElementId);
    console.log(bgColorId);
bgColorId.setAttribute('disabled');
}




}
let sum=0;
function CountingTotal(){
    
    sum=sum+550;
    let totalSumId=document.getElementById("counting-sum");
    let grandSumId=document.getElementById("grand-total");
    totalSumId.innerText=sum;
    grandSumId.innerText=sum;
    return sum;
}
let text;
document.getElementById("coupon-text").addEventListener("keyup",function(event){
     return text=event.target.value;

  
 })
function discountGrandTotal(){
    let tempTotal,GrandFinal,grandSumId;
    if(text==='NEW15' ){
         tempTotal=sum;
        console.log(tempTotal);
         GrandFinal=tempTotal-tempTotal*(15/100);
       grandSumId=document.getElementById("grand-total");
        grandSumId.innerText=GrandFinal;
    }
    else if(text==='Couple 20'){
         tempTotal=sum;
        GrandFinal=tempTotal-tempTotal*(20/100);
         grandSumId=document.getElementById("grand-total");
        grandSumId.innerText=GrandFinal;
    }
    else{
        alert("Wrong Coupon Code");

    }

}
function discountGrandTotal2(){
    
    }

