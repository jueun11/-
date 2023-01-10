//* 내풀이
function solution(num, k) {
  var answer = String(num).split('').map(el => Number(el));
  //숫자로 된 배열로 만들어줬다. answer에 저장안해주니까 밑에 연산자가 너무 길어짐
  return answer.includes(k) ? answer.indexOf(k) + 1 : -1;
  //k를 포함하고 있으면 k의 순서를, 미포함시 -1 반환
}

//* 다른풀이
function solution(num, k) {
  return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
  // 숫자로 된 배열만드는 과정까지는 동일
  // 작대기 두개는 이진 논리 연산자이다. or의 개념으로, 앞의 것을 충족하면 뒤까지는 안간다. 이는 indexOf(k) + 1 를 충족하면 -1을 반환하지 않고, 충족하지못하면 -1을 반환한다는 의미이다.
  // indexOf(k)는 원본배열에서 인수로 전달된 값을 검색한다. 따라서 indexOf(k)로 k값을 검색하고, k값이 있으면 특정 수를 반환하고, 그 수의 +1을 해준것을 반환.
  //값이 없을 시 -1을 반환한다.
}