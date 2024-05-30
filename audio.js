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
    stopAudio()
    audio1.play()
})
boo.addEventListener('click',()=>{
    stopAudio()
    audio2.play()
})
gasp.addEventListener('click',()=>{
    stopAudio()
    audio3.play()
})
tada.addEventListener('click',()=>{
    stopAudio()
    audio4.play()
})
victory.addEventListener('click',()=>{
    stopAudio()
    audio5.play()
})
wrong.addEventListener('click',()=>{
    stopAudio()
    audio6.play()
})

function stopAudio(){
    audio1.pause()
    audio1.currentTime=0
    audio2.pause()
    audio2.currentTime=0
    audio3.pause()
    audio3.currentTime=0
    audio4.pause()
    audio4.currentTime=0
    audio5.pause()
    audio5.currentTime=0
    audio6.pause()
    audio6.currentTime=0
}
