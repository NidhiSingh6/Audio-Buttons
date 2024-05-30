const applause=document.querySelector('#applause')
const boo=document.querySelector('#boo')
const gasp=document.querySelector('#gasp')
const tada=document.querySelector('#tada')
const victory=document.querySelector('#victory')
const wrong=document.querySelector('#wrong')

const audio1=document.querySelector('#audio1')
const audio2=document.querySelector('#audio2')
const audio3=document.querySelector('#audio3')
const audio4=document.querySelector('#audio4')
const audio5=document.querySelector('#audio5')
const audio6=document.querySelector('#audio6')

// console.log(applause,boo,gasp,tada,victory,wrong);
// console.log(audio1,audio2,audio3,audio4,audio5,audio6); 

applause.addEventListener('click',()=>{
    audio1.play()
})
boo.addEventListener('click',()=>{
    audio2.play()
})
gasp.addEventListener('click',()=>{
    audio3.play()
})
tada.addEventListener('click',()=>{
    audio4.play()
})
victory.addEventListener('click',()=>{
    audio5.play()
})
wrong.addEventListener('click',()=>{
    audio6.play()
})

