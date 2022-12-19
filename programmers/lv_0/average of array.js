//내풀이
function solution(numbers) {
  //number는 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]이라는 변수라치자
  let answer = 0;
  let allNumber = 0;
  for (let i= 0; i<numbers.length; i++){
    //for문을 통해 각 배열요소를 순차적으로 훑는다
      allNumber += +numbers[i];
      //allNumber라는 변수에 각 배열요소를 전부 더해넣는다. 1+2+3+4+5+6+7+8+9+10 = 55
      answer = allNumber/numbers.length;
      // 답에 모든숫자를 숫자의 갯수만큼 나눈것을 넣는다. 전형적인 평균값 구하기.
  }
  return answer;
}

//다른풀이
function solution(numbers) {
    var answer = 0;
    for(i of numbers) {
      //for of 반복문을 활용하였다.주로 배열에 활용하는 반복문스타일이라고한다.
      //문법은 for(변수 of 객체){}로 위의 let i= 0; i<numbers.length; i++를 보다 간단히 표현했다. 여기서 i는 각 배열 요소이다.
      //위의 내 풀이면 numbers[i]같이 표현되지만, 여기에는 i에 직접적으로 각 요소가 들어가게된다.
        answer += i
      //answer에 i(요소..123..)를 넣고 더한다.
    }
    return answer / numbers.length;
    //전체 숫자에서 평균값구하는 방식 위와 동일
}
//방식은 같지만, allNumber와 같이 변수를 더 만들지 않고, 바로 넣어줬다. 또한 for of를 활용하였다.