// *내풀이
function solution(my_string) {
  return my_string.replaceAll(/[^\d]/g , " ").split(' ').reduce((acc,cur) => acc + (+cur) , 0);
  //정규표현식 활용, 숫자가 아닌것은 공백으로 바꾸고, 단어로 구분하여 숫자만 더해줌
}


// *다른풀이
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
  // \D+ 는 하나 혹은 연결된 숫자라고한다. 초기값을 0으로하고 그냥 전체 숫자를 Nunber로 변환하여 더했다.
  // 문자열이면 짜피 더해지지않으니 그냥 해도 상관없다.
}