SpeechRecognition = window.webkitSpeechRecognition;
r = new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML = ''
    r.start()
}
r.onresult = function (event) { console.log(event)
content=event.results[0][0].transcript
document.getElementById("textbox").innerHTML=content
if (content=="selfie") {
    speak()
}

 }
function speak() {
    s=window.speechSynthesis;
    speakdata="taking your selfie in three seconds"
utter=new SpeechSynthesisUtterance(speakdata)
s.speak(utter)
setTimeout(function () {
    img_id="selfie1"
    takesnap()
   
},3000)
setTimeout(function () {
    img_id="selfie2"
    takesnap()
   
},6000)
setTimeout(function () {
    img_id="selfie3"
    takesnap()
    
},9000)
}
Webcam.set({
    width: 360,height: 360,image_format: "png",png_quality: 90
})
camera=document.getElementById("camera")
Webcam.attach(camera)
function takesnap() {
    Webcam.snap(function(dataurl){
        if (img_id=="selfie1") {
            document.getElementById('result1').innerHTML='<img id="selfie_image1" src="'+dataurl+'">'
        }
        if (img_id=="selfie2") {
            document.getElementById('result2').innerHTML='<img id="selfie_image2" src="'+dataurl+'">'
        }
        if (img_id=="selfie3") {
            document.getElementById('result3').innerHTML='<img id="selfie_image3" src="'+dataurl+'">'
        }
    })
}
function save() {
    link=document.getElementById("link")
    image=document.getElementById('selfie_image').src
    link.href=image
    link.click()
}