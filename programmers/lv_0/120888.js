// *내풀이
function solution(my_string) {
  return [...new Set(my_string)].join("");
  //이전에 알게된 Set으로 중복을 제거했다. 
  //[]안에 스프레드 연산자로 바로 가져왔다. 이렇게 가져오지않으면 제대로 값이 전달되지 않는다.
}