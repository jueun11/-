//내풀이
function solution(my_string) {
  return my_string.split('').filter(el => isFinite(el)).sort((a,b) => a-b).map((i) => Number(i));
  //문자열을 split로 배열로 전환
  //filter로 isFinite..이건 원래는 유한수인지 검사하는 것인데 숫자가 아닐경우 false반환이라 써봤다.
  //이렇게 걸러진 숫자들을 sort로 정렬하고 map으로 숫자타입으로 바꿔주었다.
}

//다른풀이
function solution(my_string) {
  return my_string.replace(/[^\d]/g,'').split('').map(v=>+v).sort();
  //replace는 지정한 값을 원하는 것으로 바꿀 수있다. []안에 들어가는 ^는 부정의 의미이다. \d는 숫자.g는 글로벌, 모든 요소를 검색한다.
  //해당 정규식에 따라 숫자가 아닌요소를 ''로 바꿔준다.(삭제)
  //그후 배열로 만들고 , map으로 +를 사용하여 숫자로 바꿔주고, sort로 정렬해주었다. sort()에 값을 넣지않으면 오름차순으로 정렬된다.
}