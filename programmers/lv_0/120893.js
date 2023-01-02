//내 풀이
function solution(my_string) {
  return [...my_string].map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join("");
}
//[]배열안에 my_string을 spread연산자를 활용하여 배열로 가져오고 map을 사용했다.
//map은 모든 요소에 해당 식을 적용한단의미. el은 각 요소이다. el말고 딴걸로 써도댐
//toUpperCase은 대문자로 변환할 때 사용하는 메서드이다. 요소가 요소를 대문자로 변환한 형태, 즉 대문자면 toLowerCase, 소문자로 요소를 바꾸고, 대문자가 아닌 소문자일 경우 대문자로 바꿔준다. 그리고 이렇게 변환된 배열을 join("")을 활용하여 하나의 어절로 묶어줬다. 

//다른풀이
function solution(my_string) {
  var answer = '';
  for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}
//for of는 (변수 , 배열)의 형태를 갖는다. 문자열은 유사배열이기에 for of로 각 요소를 가져올 수 있다.
//이는 for (let i = 0; i < arr.length; i++){arr[i]}식과 작동원리가 같다. c는 각 요소를 의미하며 순차적으로 가져오고 식을 실행한다.
//answer에 c가 대문자일경우 소문자로 바꾼값을, 아닌경우 대문자로 바꾼값을 넣어준다. 누적시켜서
//그리고 for문이 끝난 후 누적된 answer를 리턴한다.

//*어떤방식이 낫다고 명확하게 말하긴 어려운듯하다. 그래도 배열활용이니 map을 쓰는 것이 좋앗을듯 하다.
