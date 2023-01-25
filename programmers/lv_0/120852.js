// *다른 풀이
function solution(n) {
  var answer = [];
  while (n % 2 === 0) {
    //while은 조건문이 참이면 계속해서 실행한다.
    answer.push(2);
    n /= 2;
    //참일 경우 2를 answer에 추가해주고, n을 2로 나눠준 값으로 바꿔준다.
  }
  //그러다 더이상 나눠주지 않으면 while문 종료하고 밑의 부분 실행
  for (let i = 3; i * i <= n; i += 2) {
    // 2로 이미 다 나눴기에, 홀수인 상태이다. 때문에 3부터 시작
    // i * i 의 값이 n보다 커질경우 해당 for문은 종료된다. 이건 수학적인 부분인듯
    // 홀수만을 돌아야하기에 2를 더함
    while (n % i === 0) {
      answer.push(i);
      n /= i;
      //나눠지는 값만 answer에 넣어준다. 
    }
  }

  if (n > 2) answer.push(n);
  return [... new Set(answer)];
};


// 다른풀이2
// 내가 하려던 방식
function solution(n) {
  const smallNumber = []
  let idx = 2
  // 초기값은 2로잡는다. 소인수 분해 최저 수가 2이기에
  while(n !== 1) {
      // n의 약수라면 배열에 추가
      // n이 1과 같아지면 다 나눠진 상태이다.
      // 3에서 3으로 나누면 3, 1이 구해진다. 
      if(n%idx === 0) {
          smallNumber.push(idx)
          //나눠지면 값을 배열에 넣는다.
          n/=idx
          //나눠지면 n을 idx로 나눠진 숫자로 바꿔준다.
          idx = 2
          //그리고 idx는 다시 2로
      } else {
          idx += 1
          //안나눠지면 계속 idx값을 더해줌
      }
  }
  // 중복 제거하여 반환
  return Array.from(new Set(smallNumber))
}