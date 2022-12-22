//내풀이
function solution(numbers) {
  for(let i = 0; i < numbers.length; i++){
      numbers[i] = numbers[i]*2;
  } 
  return numbers;
}
//for문으로 각 요소에 순차적으로 *2를 해주고 배열을 가져왔다. for문이라 다소 복잡해진듯 하다. 

//다수의 풀이
function solution(numbers) {
  return numbers.map(i=>i*2);
  //map이라는 배열 메소드를 사용하였다. map이 딱 이 문제에 적합한 메소드인듯하다. 모든 값에 같은 식을 적용하여 새로운 배열을 만들어야할 때 사용한다.
  //map은 콜백함수를 이용해서 각 요소를 호출한 다음, 그 값에 식을 수행한다.그리고 그 값을 새 배열로 만들어낸다.
  //위의 내 방식인 for문은 코드가 길어지는 단점이 있다. 또한 for문은 조건만큼 반복하여 실행하기에 좋지않다.
  //배열관련 문제는 배열메소드를 최대한 활용하여 작성한다.
}