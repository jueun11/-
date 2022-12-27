//내풀이
function solution(my_string, n) {
  let array = my_string.split('');
  //배열로 만들어 준 후
  const arrayMap = array.map(el => el.repeat(n));
  //map으로 모든 요소에 실행, 각 요소에 repeat(n번)실행... 'a'.repeat(2)는 'aa'를 반환하는 식
  return arrayMap.join('');
  //따로 찢어져 있는 각 요소를 합쳐줌
}

//좋아요 많은 풀이
function solution(my_string, n) {
  var answer = [...my_string].map(v => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}
//my_string을 ...을 써서 []안에 가져옴 < 배열을 바로 만들어줌