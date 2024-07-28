Webcam.set({
    width:350, height:300, image_format:"png", png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function take_Snapshot()
{
   Webcam.snap(function(data_uri){
    document.getElementById("captured_image").innerHTML="<img id='snapped_img' src='"+data_uri+"'></img>"
   })
}

console.log("ml5Version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uvlYeip4z/model.json",modelLoaded)
function modelLoaded(){
    console.log("model loaded")
}
function check(){
    img=document.getElementById("snapped_img")
    classifier.classify(img, gotresult)
}
function gotresult(error, results)
{
  if (error){
    console.error(error)
  }
  else{
    console.log(results)
    document.getElementById("identified_object").innerHTML=results[0].label
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)
  }
}

