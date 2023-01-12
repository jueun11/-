// *내풀이
function solution(before, after) {
  let a = [...before].sort().join();
  let b = [...after].sort().join();
  //문자열로 만들고 알파벳순서로 정렬한뒤 합쳐주었다.
  return a.includes(b) ? 1 : 0;
  //includes로 문자열 안에 문자열이 있는지(동일한지)확인
}

// *다른풀이
function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
  //따로 a b같은 변수를 만들지 않고 바로 비교 split와 [...]의 의미는 같다.
}