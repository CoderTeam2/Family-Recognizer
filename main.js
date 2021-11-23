Webcam.set({
    width : 300,
    height : 300,
    image_format : "jpeg",
    jpeg_quality : 90
});

Webcam.attach('#webcam');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("preview").innerHTML = "<img id='pic' src="+data_uri+">"
    });
}

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JLe0LYx5i/model.json",modelLoaded);

function modelLoaded(){
    console.log(ml5.version);
}

function check(){
    var img = document.getElementById("pic");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
 if(error){
     alert("An error occured!")
 }else{
     document.getElementById("person").innerHTML = results[0].label;
     document.getElementById("accuracy_level").innerHTML = results[0].confidence.toFixed(3);
 }
}