//내풀이
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
  //Number.isInteger는 ()안에 들어오는 인수가 정수인지 판별한다.정수여야 정상적인 제곱수이다.
  //Math.sqrt는 인수의 제곱수를 구하는 함수이다. 어떻게든 구하기에 n.nnnn으로 나올 수 있다. 제곱수는 정수이기에 
  //정수만 따로 걸러줘야한다.
}

//다른풀이. 해당경우는 내 방식이 다수의 풀이라서 이런풀이도 가능하구나 정도로 보면될듯
function solution(n) {
  for (let i = 0; i < n/2; i++) {
    // 정수n을 반으로 나눈것보다 i가 크면 i를 증가시키며 반복. n/2까지 반복이다.
    //제곱을 하려면 적어도 정수로 주어진 값의 절반보다는 작아야한다. *2를 하기에.
      if (i*i == n) {
          return 1;
          //반복하며 i를 제곱했을때 n이되면 1을
      }
  }
  return 2;
  //아니면 2를 반환
}