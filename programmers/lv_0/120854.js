//내 풀이
function solution(strlist) {
  let a = new Array(strlist.length);
  strlist.forEach((num, index)=>{
  a[index] = num.length;
  }) ;
  return a;
}
//forEach로 각 배열값을 a의 동일한 순서에 넣어줬다.

//좋은 풀이
function solution(strlist) {
  return strlist.map((el) => el.length)
}
//map을 사용하여 간단히 풀었다.
//map은 배열의 모든 요소에 작업을 수행시켜준다.
//예를들어 모든 요소에 *3을 해주고 싶다치면
let a = [0,1,2]
let b = a.map((el) => el*3)
console.log(b);
//을 해주면 b에 0,3,6이 출력된다.
function solution(strlist) {
  return strlist.map((el) => el.length)
}
//다시 이 식을 보면 strlist의 각 요소를 el.length로 바꿔준다는 의미이다.



