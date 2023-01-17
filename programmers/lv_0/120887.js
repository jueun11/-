// *내풀이
function solution(i, j, k) {
  var answer = '';
  //빈문자열에
  for(let num = i; num<=j; num++){
      answer += num;
      //num을 +해줌. 문자열이기때문에 1+2는 "12"다.
  }
  return answer.split('').map((el) => +el).filter((el)=> el === k).length;
  //문자열을 숫자로 된 배열로 바꾼후 k와 같은 값 걸러주고 길이값(갯수)구해줌
}

// *다른풀이
function solution(i, j, k) {
  let a ='';
  for(i;i<=j;i++){
    //i가 이미 변수이기에 따로 let으로 안해도 된다.
      a += i;
  }
  //여튼 여까지는 동일함

  return a.split(k).length-1;
  //아예 k를 기준으로 배열을 나눠주었다. 대신 이렇게하면 k가 121일때 2를 기준으로 나누면 끝의 1이 남기에 length에 -1을 해주어야한다.
}