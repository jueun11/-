//내풀이
function solution(n) {
  let count = 0;
  for(let i = 0; i<=n; i ++){
      if(n%i === 0){
        //for문으로 n나누기 1..2..3..을 반복하며 나눴을때 나머지가 남지 않을때 count의 수를 올려주는 식으로 했다.
        //예전에 홀, 짝 걸러내던것에서 떠올린 방식이다.
          count++;
      }
  }
  return count;
}

//다른 풀이
function solution(n) {
  let ans = 0;
  for (let i = 1; i < Math.sqrt(n); i++)
  //Math.sprt는 인수(n)로 전달된 숫자의 제곱근을 반환한다. 제곱근이란 16이 있으면 4, -4가 제곱근이다. 어떤 숫자x를 제곱했을때 결과값a에 도달하면 x가 a의 제곱근인 셈이다. 20의 제곱근은 4.472135955이다.그렇다면 이 식은 4번 반복하게된다.
      if (n%i === 0) ans+=2;
      // 실행횟수가 감소한만큼 증가폭이 크다. 수학적사고의 차이인듯하다. 난 이게 제곱값 횟수를 응용할 수 있을줄 몰랐다.
  return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans;
  //isInteger는 인수()로 가져온 숫자가 정수인지 검사한다. 정수면 true, 정수가 아니면 false를 반환
  //n을 20이라 치면 정수가 아니다.4.472135955. 정수일경우 ans값에 +1을 해준 값을 반환하고, 아닐경우 그대로 반환한다. 
}