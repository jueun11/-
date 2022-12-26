//내풀이
function solution(dot) {
  var answer = 0;
  if(Math.sign(dot[0]) === 1 && Math.sign(dot[1]) === 1){
          answer = 1;
  }
  if(Math.sign(dot[0]) === -1 && Math.sign(dot[1]) === 1){
          answer = 2;
  }
  if(Math.sign(dot[0]) === -1 && Math.sign(dot[1]) === -1){
          answer = 3
  }
  if(Math.sign(dot[0]) === 1 && Math.sign(dot[1]) === -1){
          answer = 4
  }
  return answer;
}
//Math.sign를 활용하였다. 중복된 코드가 많다.

//우수풀이?
function solution(dot) {
  const [num,num2] = dot;
  const check = num * num2 > 0;
  // -가 하나라도 있으면 해당 조건을 충족할 수 없다. check는 식을 변수에 넣어준것이다.
  return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
  // dot[0] > 0 해당식이 참이면 (dot[0*1]이 ? 0보다 크면1,작으면4) 거짓(dot[1)이 음수면)이면 (dot[0*1]이 ? 0보다 크면3,작으면2)
  // 삼항연산자를 더욱 활용할 수 있어야한다.
}