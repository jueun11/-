//내풀이
function solution(my_string, letter) {
  let a= Array.from(my_string).filter((el) => el !== (letter));
  // my_string이란 문자열을 배열로 만들고, filter로 letter에 해당하는 문자를 제거했다.
  return a.join('');
  //이후 제거된 문자열을 join으로 합치고 ''을 넣어 문자를 문자열로 묶어줬다.
}

//좋아요 많은 풀이
function solution(my_string, letter) {
  const answer = my_string.split(letter).join('')
  //split는 문자열을 배열로 만드는 함수이다. 괄호안에는 구분자와 최대 분할 개수가 들어가게되는데, 구분자 자리에 letter를 넣어 letter를 기준으로 나눠지게 했다. 이러면 구분자는 사라지고 구분자가 제외된..입력값이 abcdef고 letter가 f라치면 f를 기준으로 앞뒤로 찢어진다. 
  //그리고 이것을 join으로 묶어줘서 letter를 제외한 문자열을 return 하게 되는것이다.
  return answer;
}