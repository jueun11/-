//내풀이. 유클리드 호제법을 참고하였다.
function solution(denum1, num1, denum2, num2) {
  let beforeNum1 = num1;
  let beforeNum2 = num2;
  let gcd = 1;
  //생략가능하다. 처음부터 num을 num1*num2로 만들어줬으면 가능한부분
  num1= beforeNum1*beforeNum2 ;
  num2= beforeNum1*beforeNum2 ;
  if( beforeNum1 !== num1){
      denum1 = denum1*beforeNum2;
}
      
  if( beforeNum2 !== num2){
      denum2 = denum2*beforeNum1;
}
  let denum = denum1+denum2;
  let num = num1;

  //밑 for문은 참고를 많이 하였다.
  for(let i=2; i<=Math.min(num, denum); i++){
    // 1은 나누는 의미가 없기에 2로 나누는 최소단위 설정, 나누는 최소단위가 숫자들보다 작거나 같을경우 i 를 서서히 키워간다.num이랑 denum중 더 작은숫자에 해당하는 수만큼 해당 for문 반복 ex)작은숫자가 10이라치면 i는 최대11
      if(num % i === 0 && denum % i === 0){
          //위처럼 i의 값을 키워가면서 해당 if문을 실행. 정수가 위 i값으로 나눠질 경우
          gcd = i;
          //최소 공배수를 갱신해준다.
      }
  }
  var answer = [denum/gcd,num/gcd]
  //각 정수를 최대공약수로 나눠준다.
  return answer;
}

//다른 풀이
function fnGCD(a, b){
  return (a%b)? fnGCD(b, a%b) : b;
  // ?는 조건부 연산자이다. 삼항연산자라고도 한다. 또한 함수안에서 함수를 부르기에 재귀함수이다.
  // 조건(a%b)가 ? 참이면 fnGCD(b,a%b)를 실행하고 거짓: 이면 b를 실행한다.
  // 의문점. 나눗셈도 참과 거짓으로 나눠질 수 있는가?
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1*num2 + denum2*num1;
  //분자는 = 분자1*분모2 + 분자2*분모1 을 더한 수이다.
  // denum = 10
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수
  //조건에 비교연산자나 따로 조건문이 없고 %만 있는 것이 어떤식으로 작동하는지 모르겟다.
  //나머지값을 반환하려하는데 참이면 앞쪽, 더이상 나눌게 없으면 b를 반환?
  //우선 이대로 진행하면 a에 10, b에 8이 들어간다.
  // (10%8) ? fnGCD(b, a%b) : b;
  // 2 ? fnGCD(8, 10%8) : 8;
  //이대로 진행하면 a에 8, b에 2가 들어간다.
  // (8%2) ? fnGCD(8, 8%2) : 2;
  // 이러면 8%2 값이 0이니 거짓, 2를 반환하게 되는걸까? 재귀함수이기에 거짓시 종료..인건가
  return [denum/gcd, num/gcd];
  //만일 해석이맞다면 10/2 5, 8/2 4로 일단 답은 맞게된다.
}