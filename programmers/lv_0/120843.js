// *내풀이
function solution(numbers, k) {
  let answer = k*2 -1;
  //배열 처음 숫자가 1이라 -1을 해주었다.
  return answer > numbers.length ? answer%numbers.length : answer;
  //계산을 하다보면 전체 길이 값 이상으로 넘어가는 경우가 있다. 그러면 다시 0으로 돌아오기에 길이값의 나머지를 구해주었다.
}

// *다른풀이
function solution(numbers, k) {
  return numbers[(--k*2)%numbers.length];
  //--를 앞에 붙이면 바로 차감된 값을 가져온다. 
  //나는 삼항연산자로, 길이값 이상이면 k*2-1값을 가져오게 했는데, length값을 초과하지 않아도 나머지를 구해도 된다. 
}