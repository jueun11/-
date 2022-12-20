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
  // 재귀함수이다. 삼항연산자인데 조건 ? 참일때 실행 : 거짓일때 실행
} 
function solution(denum1, num1, denum2, num2) {
  let denum = denum1*num2 + denum2*num1;
  //분자는 = 분자1*분모2 + 분자2*분모1 을 더한 수이다.
  // denum = 10
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수
  //조건에 비교연산자나 따로 조건문이 없고 %만 있는 것이 어떤식으로 작동하는지 모르겟다.
  //! %만 있을경우 나머지가 있을경우 참, 없을경우 거짓이 맞았다. (거짓시 종료)
  //return (a%b)? fnGCD(b, a%b) : b;
  //진행하면 a에 10, b에 8이 들어간다.
  // 2 ? fnGCD(8, 10%8) : 8;
  //처음 조건문 (a%b)를 했을때 나머지 2가 나왔다. 나머지가 나왔기에 식을 재 실행한다. fnGCD(a, b)에 참 조건문에 해당하는 대로 a에는 8, b에는 10%8..2를 넣고 진행한다.
  // (8%2) ? fnGCD(8, 8%2) : 2;
  // 이러면 8%2 값이 0이니 나머지 값이 없으므로 거짓에 해당하는 부분을 실행하고 종료한다. 때문에 2가 reture되는 것이다. 
  return [denum/gcd, num/gcd];
  //10/2 5, 8/2 4로 정답
}