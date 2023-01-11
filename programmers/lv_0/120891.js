// *내풀이
function solution(order) {
  return String(order).split('').map((el) => Number(el)).filter((el) => el !== 0 && el%3 ===0 ).length;
  //map까지는 숫자로 된 배열로 바꿔주는 과정이다. 이후 필터로 0이 아니면서도 나누기 3이 되는 배열을 만든 후, 길이를 구했다.
}

// *다른풀이
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  //[]안에 ...order.toString으로 배열로 가져왔다. 이때 toString을 사용하지 않으면 배열로 가져와지지않는다. 오류남 숫자로 이뤄져있기에 제대로 가져와지지 않는다고 생각된다.
  //matchAll은 그룹 캡쳐를 포함하여 정규표현식에 대해 문자열과 일치하는 모든 결과의 반복자를 반환한다.
  //이때 g플래그를 사용하지 않으면 Math를 사용했을때 해당 요소가 몇번째 인덱스인지, 그룹이 무엇인지 나온다. 캡쳐그룹은 괄호 안에 영역을 말한다. 
  //g플래그는 대상 문자열에서 패턴과 일치하는 모든 문자열을 검색하고 검색결과를 배열으로 반환한다.
  return answer;
}