//내풀이
function solution(rsp) {
  var answer = '';
  rsp.split('');
  //문자열 rsp를 배열로 찢고
  for (el of rsp){
      if(el == 2){
        //타입상관없이 구분하기위해 ==사용
          answer += 0;
      }
      if(el == 0){
          answer += 5;
      }
      if(el == 5){
          answer += 2;
      }
      //for문 돌리면서 if값 해당하는 것을 더해줌
  }
  return answer;
}

//다른풀이
function solution(rsp) {
  let arr = {
      2: 0,
      0: 5,
      5: 2
  };
  //arr라는 객체를 만들었다. 이러면 arr[2]를하면 0이 나오는 식이다.
  var answer = [...rsp].map(v => arr[v]).join("");
  //[]로 문자열을 배열로 가져오고 각 요소를 arr[각요소]넣어서 나온 값을 join으로 묶어줬다.
  //각 배열 입력에 따른 결과를 얻고싶으면, 객체를 하나 더 만들어서 결과가 나오도록 하자
  return answer;
}