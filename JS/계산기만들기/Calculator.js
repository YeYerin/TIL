/*
function add(char) {
    let display = document.getElementById('display');   //input을 불러오기 //getElementById -> input 태그
    display.value += char; //input 태그의 값에 char 값을 가져와서 추가하기 //.value -> input 태그 값
}

*/

//연산자를 연속으로 입력하지 않도록 하기

let number = false; //숫자인지 아닌지 확인하는 변수, 숫자면 true

function add(char) {
    if (number == true) //전에 숫자를 입력했으면
        document.getElementById('display').value += char;   //값을 입력받기

    else {  //전에 연산자를 입력했고(숫자X),
        if (isNaN(char) == true) { }    //받은 값이 연산자라면 아무것도 하지 않기(계속 입력X) //isNan() 함수 -> 숫자면 false

        else {  //받은 값이 숫자라면
            document.getElementById('display').value += char;   //값을 입력받기
        }
    }
    //다음입력을 위한 number 설정
    if(isNaN(char)==true) {    //받은 값이 연산자면 false
        number = false;
    } else {                   //숫자면 true
        number = true;
    }
}


//'='에 연결
function calculator() { 
    let display = document.getElementById('display');   
    let result = eval(display.value);   //display에 있는 식을 계산하고 저장하기 //eval함수 -> 식 계산
    document.getElementById('result').value = result; //result 값(.value)에 계산한 값 넣기
}

//'AC'에 연결
function reset() {
    document.getElementById('display').value = "";  //clearInterval() 함수 쓰면 undefined
    document.getElementById('result').value = "";
}