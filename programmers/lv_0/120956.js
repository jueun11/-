//내풀이
function solution(babbling) {
  let answer = [] ;
  for(let i=0; i<babbling.length; i++){
      answer.push(babbling[i].replace(/aya|ye|woo|ma/g,'1'));
      //정규표현식사용, 해당 문자열과 일치하는 부분을 1로 바꿔줌 = 숫자는 응애가 말할수 있는 부분
  }
  return answer.filter(el => !isNaN(el)).length;
  //필터로 숫자가 아닌부분을 제외하고 숫자로만 이뤄진 부분의 길이를 구함
}
//각 요소에 옹알이에 해당하는 부분 숫자로 변환 -> 이후 숫자로만 이뤄진(옹알이로만 이뤄진) 부분의 갯수 구함
//! 정규표현식은 백트래킹(왼쪽에서 오른쪽탐색, 100매칭 아닐시 다시 뒤로 돌아가서 매칭)으로 인해 성능이 좋지않다. 

//다른풀이
function solution(babbling) {
  const wordSet = new Set(["aya", "ye", "woo", "ma"])
  //아이가 말하는 문자배열
  let result = 0;
  //result의 값을 0으로

  for(const word of babbling) {
    //babbling의 요소를 하나씩 word로 가져옴
      let remainWord = '';
      let prevWord = '';
      for(const char of word) {
        //babbling의 요소인 word의 각 글자를 하나씩 가져옴 word가 ayaye라 치면 a y a y e일케 하나씩 가져옴
          remainWord += char;
          //remainWord에 word의 글자를 더해준다
          if(wordSet.has(remainWord)) {
            //has는 set객체에 주어진 요소가 있는지 판별한다. 이 경우 wordSet에 아까 가져온 word의 글자가 있는지 판별하는 것. 만약 wordSet에 아까 가져온 글자가 잇다면
              if(remainWord === prevWord) break;
              //만일 아까 가져온 글자가 prevWord, 비어있다면 해당 for문을 종료한다
              prevWord = remainWord
              //비어있던 prevWord에 가져온 글자를 넣는다
              remainWord = ''
              //이후 remainWord를 빈 글자로 초기화시켜준다
              //* wordSet에 있는 글자만 ''으로 초기화시켜준다. 만일 set에 없다면 if문이 실행되지않는다. ''로 초기화 되지않고 계속 다른 값이 +=된다.(빈요소가 될 수 없음)
          }
      }
      //해당 for문은 babbling의 각 요소단위로 진행된다.[ayaye,wooya]가 들어갔다면 "     ", "   ya"이런식으로 하나씩 나옴
      if(remainWord === '') result++
      //remainWord가 비어있다면 result값을 증가시킨다.하나라도 삭제되지않은 값이 있으면 result는 증가하지 않는다.
  }
  return result;
  //빈 배열의 수 리턴
}

//*배열 요소를 하나씩 가져오고, 그 요소를 한글자씩 가져오고 set에 있는지확인, 있으면 빈배열로 만듬. for문으로 요소 하나, 그리고 또 한글자씩 뜯어서 다시 요소를 반환하는걸 생각해야한다.