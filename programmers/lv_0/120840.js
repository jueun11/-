// *내풀이
function solution(balls, share) {
  let result01 = 1;
  let result02 = 1;
  for (let i = 1; i <= balls - share; i++) {
    result01 = result01 * i;
  }
  for (let i = 1; i <= share; i++) {
    result02 = result02 * i;
  }
  let denominator = result01 * result02;
  let numerator = 1;
  for (let i = 1; i <= balls; i++) {
    numerator = numerator * i;
  }
  //힌트따라서 팩토리얼값을 각각 구하고 식을 따라함
  return Math.round(numerator / denominator);
  //소수점을 대비해 반올림해줌
}

// *다른풀이
const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));
//인수로 가져온 num이 0과 같으면 1을, 0이 아니면 num*해당함수(num-1)
//팩토리얼을 계산하는 재귀함수이다. 재귀를 삼항으로 표현할 수도 있었다.
//재귀를 삼항으로 하면 참부분이 종료조건, 거짓이 반복부분이다.
//1을 반환하는 이유는, 종료할때 1을 곱해야 정상적으로 값이 출력됨.

function solution(balls, share) {
  return Math.round(
    팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share)
  );
}
