//내풀이
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
  //includes는 배열에 ()안의 것을 포함하고 있는지 판별한다. 포함하고있으면 true, 미포함이면 flase를 반환한다. 
}

//다른 풀이
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2
  //split는 ()안의 구분자를 기준으로 여러 문자열로 나눈다.
  //만일 str1안에 str2가 있다면 나눠질테니 길이가 1보다 커지는 것이다.(나눠지지않은 상태는 1)
}