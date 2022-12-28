//내풀이
function solution(n) {
  let allNumber = new Array(n).fill(0).map((i, index) => index + 1 );
  //n이라는 숫자만큼의 요소를 가진 배열을 만들고,fill로 임의로 0 을 넣고 그 후 map을 사용하여 모든 요소(i)에 index값 + 1 을 넣어줬다. index값은 0부터 시작이기에 +1을 해줘야 배열이 1부터 시작한다.
  return allNumber.filter((el) => el%2 !== 0);
  //%의 나머지값을 활용하면 홀짝을 쉽게 구분할 수 있다.
}

//다수의 풀이
function solution(n) {
    var answer = [];
    //answer라는 빈 배열을 만듬
    for (let i = 1; i<=n; i+=2) answer.push(i)
    // i는 1이고, i가 주어진 n보다 작거나 같을때 i의 값을 2씩 올려준다.
    // n는 10이라 치면 i는 1,3,5,7,9이다. push는 배열 끝에 요소를 추가하는 함수이다. 해당 for문이 실행되면서 i에 해당하는 값이 answer에 담긴다.
    //for문이지만 딱 홀수의 양만큼 +2씩 실행되기에 실행횟수도 모든 요소를 평가하는 fillter보다 효율적일것으로 생각된다.
    return answer;
}
