
const btn1 =document.querySelector('.btn1')
const btn2 =document.querySelector('.btn2')
const cntr =document.querySelector('.container')
var x =-50

cntr.style.top=x+'rem'


console.log(btn1);
drp=()=>{
    x
    if(x==0 || x>=0){
        cntr.style.top='0rem'
    }else{
        x-=x
        cntr.style.top=x+'rem'
    }
   
}
btn1.addEventListener('click' , drp)
window.addEventListener('click', function(e){
    if(cntr.style.top='0rem'&& e.target===cntr){ 
//cntr.style.display='none';
cntr.style.top='-50rem'
    }
})
//to add animation use display:block/none instead of position top to hide cntr 
//then use keyfram in css



