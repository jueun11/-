//내풀이
function solution(num_list) {
  let a = 0;
  let b = 0;
  for(let i = 0; i<num_list.length; i++){
      if(num_list[i]%2 === 0){
          a = a+1;
      }else{
          b = b+1;
      }
  }
  return [a,b];
}
//for문을 사용하여 다소 길어졌다.

//다른풀이
function solution(num_list) {
  var answer = [0,0];

  for(let a of num_list){
    //for of 는 배열에서 사용하는 반복문이다. 내가 사용한 for..하고 a[i]식으로 하는 복잡한 식은 for of를 사용하면 간단히 표시할 수 있다.
    // a라는 변수에 num_list의 각 요소가 할당되고 실행되는 방식이다.
      answer[a%2] += 1
      //answer[요소 % 2] += 1
      //answer[요소를 2로 나눈 나머지값에] 1을 더하고 합쳐준다.
      //answer[num_list의 0번째요소...1을 2로 나눈 나머지1] += 1 
      //anwwer[1] = 1
      //answer[num_list의 1번째요소...2을 2로 나눈 나머지0] += 1 
      //anwer[0] = 1
      //answer[num_list의 2번째요소...3을 2로 나눈 나머지1] += 1
      //anwer[1] = 2
      //answer[num_list의 3번째요소...4을 2로 나눈 나머지0] += 1 
      //anwer[0] = 2
      //answer[num_list의 4번째요소...5을 2로 나눈 나머지1] += 1 
      //anwer[1] = 3
  }
  //answer[0] = 2
  //answer[1] = 3
  return answer;
}
//각 값을 가져온 다음, %로 홀수인지 짝수인지 구분하고 +=로 값을 올려주는 방식이다. 