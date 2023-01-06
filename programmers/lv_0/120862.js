//내풀이
function solution(numbers) {
  numbers.sort((a,b) => b-a);
  //sort로 내림차순으로 정렬해준뒤
  return numbers[0]*numbers[1] > numbers[numbers.length-1]*numbers[numbers.length-2] ? numbers[0]*numbers[1] : numbers[numbers.length-1]*numbers[numbers.length-2];
  //-*-는 +이므로 -값 두개가 끝에 오고, 그것이 앞의 0,1을 곱한거보다 크면 -값끼리 곱한 수를 반환하도록 했다.
}

//다른풀이
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  //오른차순으로 정렬
  return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
  //> 연산자 대신 Math.max를 사용하였다. 뒤는 내림차순과 오름차순의 차이정도뿐이다.
  //단순히 수의 크고 작은 값 비교면 Math.max도 좋은 것 같다.
}