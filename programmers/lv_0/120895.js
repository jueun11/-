//내풀이
function solution(my_string, num1, num2) {
  let answer = [...my_string];
  //answer에 my_string을 배열로 가져옴
  answer.splice(num2,1,my_string[num1]);
  //splice로 num2위치 바꿈
  answer.splice(num1,1, my_string[num2]);
  //splice로 num1에 num2값 넣어줌
  //이때 my_string이 아니라 answer로 가져오면 바뀐 후의 요소들을 가져와서 꼬임
  return answer.join('');
  //이후 문자열로 다시 합쳐줌
}

//다른풀이
function solution(my_string, num1, num2) {
  my_string = my_string.split('');
  //배열로 바꿈
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  //[]에 배열요소를 가져오고, 바로 바꿔준다. 
  //[]에 요소를 가져오면 =을 사용해서 특정 요소를 바꿀 수 있다. 배열이라 가능한 방식
  return my_string.join('');
  //join으로 문자열로 합침
}