//내 풀이
function solution(message) {
  return message.length*2;
}
//간단히 길이에 2를 곱해줬다.

//다른풀이
function solution(message) {
  return message.split('').length * 2;
}
//split는 문자열을 배열로 만들어주는 것이다. 괄호안에는 ('단위',해당크기 이하만큼)이 들어간다. 
//문자를 글자단위로 짤라서 배열로 만들고 그 배열의 길이를 구한 방식이다.
