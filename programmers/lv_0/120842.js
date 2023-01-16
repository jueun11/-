// *내풀이
function solution(num_list, n) {
  let arr = new Array(num_list.length/n);
  for (let i = 0; i<num_list.length/n; i++){
      arr[i] = new Array(n);
  }
  //2차원 배열 만들어줌

    for(let count = 0, i = 0; i<num_list.length/n; i++){
      for(let j=0; j<n; j++){
              arr[i][j] = num_list[count];
              //count값은 0부터 해당 식 실행될때마다 계속 올라감. 그거로 index값 활용
              count++;
      }
  }  
  return arr;
}

// *다른 풀이
function solution(num_list, n) {
  var answer = [];

  while(num_list.length) {
    //num_list의 길이만큼 반복
      answer.push(num_list.splice(0,n));
      //push로 num_list의 0부터 n까지의 수를 붙여줌. splice는 해당 (시작, 끝-1)만큼 요소 삭제. 
      //붙여준것을 삭제해주는 느낌 
      //splice로 배열을 따오면 배열을 유지하며 붙일 수 있다는 점
  }
  return answer;
}