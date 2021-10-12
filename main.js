Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

Camera = document.getElementById("webcam");
Webcam.attach("#webcam");

function capturing() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '"></img>';
    });
}

console.log('ml5version=',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hjFz364mX/model.json',modelLoaded);

function modelLoaded(){

    console.log("modelLoaded ");
};



