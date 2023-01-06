//내풀이
function solution(age) {
  var answer = '';
  let arr = String(age).split('').map(Number);
  //숫자로 이루어진 배열로 변환
  for (el of arr){
      answer += String.fromCharCode(el + 65);
      //아스키코드를 활용했다. a는 65이므로 요소숫자값에 초기값만큼더해주고
  }
  return answer.toLowerCase();
  //소문자로 변환해주었다.
}

//다른풀이
function solution(age) {
  let char = 'abcdefghij'
  //a-j까지 주어진 영어배열만큼 char변수에 넣어주었다.
  return Array.from(age.toString()).map(t => char[+t]).join('');
  //age를 문자열 배열로 만든뒤, map으로 각요소를 char[+로 숫자변환, 인덱스값]을 넣어주었다.
  //a는0,b는1,c는2...이런식으로 매칭되기에 age를 바로 배열로 넣어도 되었다. 그후 join으로 합쳤다.
}
