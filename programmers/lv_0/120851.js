//내풀이
let count = 0;
function solution(my_string) {
    let array = my_string.split('');
    //우선 배열로 만들고
    for(i = 0; i <= array.length; i++){
        if(Number.isInteger(parseInt(array[i]))){
          //배열 순회하며 요소가 정수일경우
            count = count + parseInt(array[i]);
            //count값에 해당 요소를 더해줬다.
        }
    }
    return count;
}

//다수의 풀이
function solution(my_string) {
  return my_string.match(/[0-9]/g).reduce((a,b) => parseInt(a)+parseInt(b));
  //match는 문자열 검색할 때 사용하는 함수이다. /[0-9]/에 해당하는 것을 배열로 가져온다.{"1","2","3","4"}문자형태로 가져오기에 이후 parseInt를 사용하여 숫자로 바꿔준다. a는 누적값, b는 현재 요소이다.
  //쭉 풀어보면 문자열내에서 0-9에 해당하는 것을 배열로 뽑아내고, reduce로 그 숫자(string)을 숫자(number)로 바꿔서 누적값 + 현재값을 해준다. 그러면 숫자만 더한 값이 return된다.
}

//다른풀이
function solution(my_string) {
  return my_string.replaceAll(/[^\d]/g, '').split('').map(v=>+v).reduce((a,v)=>a+v,0);
  //replaceAll는 대상 문자열을 (바꿀대상, 바꿀값)으로 바꿔준다. \d는 숫자를 의미한다. \d은 [0-9]와 같다.
  //[]내의 ^는 not의 의미이다. [^\d]는 숫자가 아닌 것들을 의미한다. 
  //replaceAll에 따라 숫자가 아닌 것들을 ''으로 바꿔준다.
  //replaceAll에는 정규식을 넣어줄 수 있다. g는 global로 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 검색하고 배열로 가져온다.
  //그리고 남은 숫자들을 split('')으로 한글자씩 분리한 배열로 만든다.
  //map으로 모든 값을 숫자로 바꿔준다. +는 피연산자를 숫자 타입으로 바꿔준다.
  //이후 reduce로 전부 더해준다.
}