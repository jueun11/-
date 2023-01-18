// *내풀이
function solution(array, n) {
  let allArray = array.concat(n).sort((a,b) => a-b);
  //n을 포함해서 오름차순 정렬을 만들고
  return allArray[allArray.indexOf(n)] - allArray[(allArray.indexOf(n)) - 1] > allArray[(allArray.indexOf(n)) + 1]  - allArray[allArray.indexOf(n)] ? allArray[(allArray.indexOf(n)) + 1] : allArray[(allArray.indexOf(n)) - 1] 
  //n에서 n앞의 인덱스 값만큼 뺀게 n뒤의 인덱스값에서 n을 뺀것보다 크면 n뒤의 값을, 작으면 n앞의 값을 출력한다.
}

//* 다른풀이
function solution(array, n) {
    return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
    //Math.abs()는 절대값을 반환하는 함수이다. -2를 받으면 2를 반환하는 식
    //a는 누적값, c는 현재 요소이다.
    //! 누적값-현재값 < 현재값 - n 이 참이면 a를 반환
    //거짓이면 누적값-현재값이 현재값 - n과 같은지 검사하고 같으면 더 작은수(조건이 만일 차이가 같으면 작은수 이기에)
    //같지않으면 현재 요소를 누적값으로 넣어준다.
    //이러면 다시 처음으로 돌아가서 a에는 이전의 요소, c는 현재요소가 들어간다. 붉은 글씨부터 반복..모든 요소 다 훑어야 끝난다.
}