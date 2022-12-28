//내풀이
function solution(numbers) {
  let a = Math.max(...numbers);
  //제일 큰  요소를 구한다.
  let b = numbers.indexOf(a);
  // 해당 요소의 인덱스룰 구하고
  let c = numbers.splice(numbers.indexOf(a),1);
  // 제일큰 요소에 해당하는 인덱스를 제거.. 중복예방
  return a*Math.max(...numbers);
  //제일 큰 요소 * 제일큰 요소 a가 제거된 배열에서 새로구한 제일 큰 요소
}

//좋아요, 다수의 풀이
function solution(numbers) {
  numbers.sort((a,b)=>b-a);
//sort는 배열을 정렬할 때 사용한다. (a,b)=>b-a 으로 내림차순으로 표시되게한다.  (a,b)=>a-b를 사용하면 오름차순이다.
  //a,b)=>b-a의 원리는 numbers[0], numbers[1]를 가져오고, numbers[1] - numbers[0]을 했을때 양수면 순서를 바꾸고 음수면 순서를 그대로둔다
  //1,2가져오고 2 - 1 = 1 양수이기 때문에 순서바꿈 1(numbers[1])를  2(numbers[0])의 자리로 이동한다.   
  //array[0],array[1]하고 array[1],array[2]를 불러오는식 순차적으로 진행
  //[2, 1, 3, 4, 5]
  //그다음 바뀐 배열의 a((numbers[1]), b(numbers[2])을 가져온다 그리고 계산.
  //3 - 1 = 2양수, 순서바꿈
  //[3, 1, 2, 4, 5]
  //a((numbers[2]), b(numbers[3])을 가져온다 4 - 2 양수, 순서바꾼다
  //[4, 3, 2, 1, 5]
  //a((numbers[3]), b(numbers[4])을 가져온다 5 - 1 양수, 순서바꾼다
  //[4, 3, 2, 5, 1]
	//다시 a((numbers[0]), b(numbers[1])을 가져온다 3 - 4 음수, 순서그대로
	//[4, 3, 2, 5, 1]
  //...
	// a((numbers[2]), b(numbers[3])을 가져온다 5 - 2 양수, 순서바꾼다
	//[4, 3, 5, 2, 1]
//반복하다가 더이상 바꿀게 없을때 멈춘다.
  return numbers[0]*numbers[1];
}
