//내풀이
function solution(array) {
  let max = Math.max(...array);
  //Math.max는 전달받은 입력받은 숫자중 가장 큰 숫자를 반환한다. ...은 스프레드 연산자.
  //함수에서 스프레드 연산자를 사용하면 배열을 바로 인자로 가져올 수 있다
  let index = array.indexOf(max);
  //아까 구한 숫자의 index값을 찾음
  return [max,index];
}

//다른 풀이
function solution(array) {
  let max = Math.max(...array)
  return [
      max,
      array.findIndex(v => v === max)
      //findIndex는 주어진 판별함수를 만족하는 배열의 첫 요소에 해당하는 인덱스를 반환한다.
      //첫 요소의 값을 찾을 때 사용하면 좋을 듯 하다.
  ];
}
