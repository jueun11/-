// *내풀이
function solution(my_string) {
  return Function("return (" + my_string + ")")();
  //eval을 쓰려다가 보안에 문제가 있다하여 해당 함수로 대체하였다.
}

// *다른 풀이
function solution(my_string) {
  return new Function("return " + my_string)(); //eval(my_string);
  // /new Function()은 함수를 동적으로 생성하는 기능을 합니다.
  // 'return '+my_string을 인자로 하여 new Function()을 생성하면 'return '+my_string을 함수로 생성합니다.
  // 'return '+my_string을 함수로 생성하면 해당 함수를 호출하면 my_string을 리턴합니다.
  // 'return '+my_string 구문을 감싸주는 이유는 my_string이 숫자식 형태로 입력되었다면 함수 실행 결과로 my_string을 리턴하도록 하기 위해서 입니다.

  // 마지막으로 (new Function('return '+my_string))()를 호출하면 함수가 실행되면서 return my_string을 실행하면서 my_string이 리턴되면서 my_string을 숫자식으로 변환하는 기능을 합니다.
}
