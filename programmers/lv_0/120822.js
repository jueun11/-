//내 풀이
function solution(my_string) {
  let arr = Array.from(my_string).reverse();
  //Array.from()으로 기존 문자열을 배열로 만들고 뒤집어줬다.
  return arr.join("");
  //이후 하나의 문자열이 되도록 join으로 합쳐줌
}

//다수의 풀이
function solution(my_string) {
  return my_string.split('').reverse().join('');
  //split활용이 제일 큰 차이이다. split은 string객체를 지정한 구분자를 이용하여 배열로 만드는 것이다. split()괄호안에 구분 기준을 넣는다.
  //위의 경우 ''가 괄호안에 들어가있는데, 스페이스 없이 ''를 할경우 각 글자별로 구분하고, 스페이스를 넣은 ' '은 단어별로 구분한다.
}