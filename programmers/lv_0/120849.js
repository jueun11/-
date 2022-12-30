//내풀이
function solution(my_string) {
  return my_string.replaceAll(/[\aeiou]/g,'');
  //replaceAll로 정규표현식을 사용했다. aeiou를 g(전체 검색)하여 ''로 바꿔주었다.
}

//다른풀이 내풀이가 다수의 좋아요많은 풀이라서 임의의 풀이를 가져왔다.
function solution(my_string) {
  return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
  //my_string을 Array.from으로 배열로 바꾸고, 요소가 'a', 'e', 'i', 'o', 'u' 를 포함하지 않는 것을 모아서 join으로 합쳐주었다. includes는 배열 메소드이지만 문자열에도 사용할 수 있다.
  // 배열 앞에 !가 오면 해당 배열 외의 것이라는 의미이다. !는 부정의 의미로 사용되었다.
}