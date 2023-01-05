//?문제 설명
//? 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.


//*내풀이
function solution(numbers, direction) {
  if(direction === "right"){
      numbers.unshift(numbers[numbers.length-1]);
      //number의 length는 항상 변하기 때문에 마지막 요소를 가져오려면 length값을 활용해야했다.
      numbers.pop();
      return numbers;
  }else{
      numbers.push(numbers[0]);
      numbers.shift();
      return numbers;
  }
}
//예전에 슬라이드쇼 구현하던 방법을 활용했다. 오른쪽 이동이면 우선 왼쪽에 오른쪽끝 요소를 붙여 넣고 오른쪽 요소를 삭제하는 방식이다.


//*다른풀이
function solution(numbers, direction) {
  var answer = [];

  if ("right" == direction) {
    //여긴 같음 사실 right left외의 입력은 없기에 ==를 써도된다.
      numbers.unshift(numbers.pop());
      //unshift로 아예 지운값을 넣어줬다. 이렇게해도되는구나
      //지운값을 앞에 넣는 간단한 방식이다. ()부터 실행되기에 괜찬은 방식이다.
      //변수선언을 하지않고 unshift안에 바로 넣은 것은, 변수를 선언하면 메모리를 차지하게된다. 
      //때문에 변수를 선언하지않음으로 성능을 향상시켰다.
  } else {
      numbers.push(numbers.shift());
  }

  answer = numbers;

  return answer;
}