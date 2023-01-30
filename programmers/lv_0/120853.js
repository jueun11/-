// *내풀이
function solution(s) {
  var answer = 0;
  let num = 0;
  //num에는 현재 요소를 저장한다.
  let arr = s.split(" ");
  //배열이 아니라 문자열이기 때문에 새로 배열로 만들어준다
  for (el of arr) {
    //for of문으로 배열 각 요소를 가져옴
    if (el == "Z") {
      //만일 z를 만나면
      num = -num;
      //num..현재요소를 -로 바꿔줌. 그럼 마이너스하게되는데, 왜 num을 가져오냐면
      //num에는 이전에 지정해둔 el이 들와있음. 새로 num값을 el로 해준게 아니라 num은 이전에 지정해둔 값임
    } else {
      num = el;
      //z아니면 num을 새 el,요소숫자로 바꿔줌
    }
    answer += Number(num);
    //누적값에 num을 더해줌. 빼기는 알아서 +-면 -라서 계산됨
  }
  return answer;
}

// *다른 풀이
function solution(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    //pop하면 마지막 요소를 반환한다. 요소를 순회하다 z를 찾으면 숫자를 모아둔 배열 stack의 가장 최근값을 반환
    //z를 발견하면 바로 전에 더했던 값을 빼주기에, 그 전에 있던요소와 지금 뺄 값 모두를 없애주면된다. +1 -1 =0
    else stack.push(+target);
    //z가 아니면 현재 요소를 stack에 +로 넣어준다.
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
  //stack.length가 0이면 거짓이다.
  //만일 요소가 있으면
  //누작값은 누적값 + 현재요소이다.
  //요소가 없으면 0을 반환
}
