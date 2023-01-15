console.log('hello');
function result(){
    var w= parseFloat(document.getElementById('weight').value);
    var h = parseFloat(document.getElementById('height').value);
    var res = parseFloat(w/(h*h)).toFixed(2);
    if(res < 18.5){
        document.getElementById('result').innerHTML = `your BMI is ${res} and you are UnderWeight.`;
        document.getElementById('result').style.backgroundColor = '#42ecf5';
        document.getElementById('result').style.borderRadius = '5px';
        document.getElementById('result').style.color = 'black';
        document.getElementById('result').style.padding = '15px';
    }
    else if(res < 25){
        document.getElementById('result').innerHTML = `your BMI is ${res} and you are Normal.`;
        document.getElementById('result').style.backgroundColor = '#42f554';
        document.getElementById('result').style.borderRadius = '5px';
        document.getElementById('result').style.color = 'black';
        document.getElementById('result').style.padding = '15px';
    }
    else if(res < 30){
        document.getElementById('result').innerHTML = `your BMI is ${res} and you are OverWeight.`;
        document.getElementById('result').style.backgroundColor = '#FF5050';
        document.getElementById('result').style.borderRadius = '5px';
        document.getElementById('result').style.color = 'white';
        document.getElementById('result').style.padding = '15px';
    }
    else{
        document.getElementById('result').innerHTML = `your BMI is ${res} and you are Obese.`;
        document.getElementById('result').style.backgroundColor = '#FF0000';
        document.getElementById('result').style.borderRadius = '5px';
        document.getElementById('result').style.color = 'white';
        document.getElementById('result').style.padding = '15px';
    }
}
function reset(){
    document.getElementById('myform').reset();
    document.getElementById('result').innerHTML = ``;
}