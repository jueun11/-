//* 내풀이
function solution(emergency) {
  let arr = [...emergency].sort((a,b) => b-a);
  //원본배열을 가져오면 배열은 참조값이 되어 원본 배열이 변형된다. 때문에 []에 스프레드 연산자로 가져왔다.
  //new Array써도 테케 2번오류남
  return emergency.map((el) => arr.indexOf(el)+1);
}

// *다수풀이
function solution(emergency) {
  let sorted = emergency.slice().sort((a,b)=>b-a);
  //slice()는 지정 범위 (시작,끝)까지 복사한다. 범위를 지정하지 않을시 전부 복사.
  return emergency.map(v=>sorted.indexOf(v)+1);
  //이부분은 동일
}