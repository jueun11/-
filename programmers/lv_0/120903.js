//내풀이
function solution(s1, s2) {
  let count = 0;
  for(let i = 0; i<s2.length; i++){
    //s2의 length값만큼 식 실행
      if(s1.includes(s2[i])){
          count++;
          //s2의 요소 하나씩 가져오면서 그 요소를 s1이 가지고 있으면 count숫자 증가
      }
  }
  return count;
  //s2 전부 순회한 후 count값 반환
}

//다른 풀이
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  //filter는 조건에 해당하는 요소를 모아 새 배열을 만든다. x는 현재 인자값. s1의 요소를 하나씩 가져온다. 그 요소를 s2가 포함하고 있으면 filter한다.
  //filter 후에 조건함수를 달 수 있다. 이를 화살표함수로 보여줌.
  return intersection.length;
  //그렇게 공통된 요소만 가져온 배열의 길이를 구한다.
}