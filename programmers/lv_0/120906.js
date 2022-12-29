//내풀이
function solution(n) {
  let nArray = Array.from(String(n));
  let b = 0;
  for(let i = 0; i < nArray.length; i ++){
      b = b + Number(nArray[i]);
  }
  return b;
}
//정수를 문자열로 전환, 그리고 배열로 만듬
//b라는 값에 요소를 더해감

//다른풀이
function solution(n) {
  return n
    .toString()
    //n을문자열로 바꾼다
    .split("")
    //문자열을 하나씩 때어준다. 한글자씩.
    .reduce((acc, cur) => acc + Number(cur), 0);
    //reduce는 배열의 길이만큼 각 요소를 순회한다. 
    //처음 acc는 초기값이나 누적값이고 cur는 현재 요소값이다.. 0이 초기값이기에 처음에는 0 + 숫자변환한(n[0])의 값을 가져오고
    //이후에는 0 + 숫자변환한(n[0])를 acc에 가져오고 cur는 n[1]이 된다. 이 식을 n배열의 길이만큼 순회하고 최종 값을 리턴한다.
}