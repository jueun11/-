// *내풀이
function solution(sides) {
  sides.sort((a, b) => b - a);
  let answer = [];
  //가장긴 변이 입력값 중 큰수 일경우
  for (let i = 0; i <= sides[0]; i++) {
    if (i + sides[1] > sides[0]) {
      answer.push(i);
    }
  }
  //나머지 한 변이 가장 긴 경우
  for (let j = sides[0] + 1; j < sides[0] + sides[1]; j++) {
    answer.push(j);
  }
  return answer.length;
}

// *다른 풀이
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
  //Math.min은 가장 작은 숫자를 리턴한다.
  //가장 작은 숫자 * 2를 하고 -1한 것도 같은 결과값을 얻는다.
  //수학적인 계산
  //수학식이 나올경우 힌트 그대로 해석해서 답을 얻기보단, 일정한 값이 나오는 식을 만드는 것이 좋을듯 하다.
}
