//내풀이
function solution(n) {
  var answer = [];
  for(let i=0; i<=n; i++){
      if(n%i === 0){
          answer.push(i);
      }
  }
  return answer;
}
//for문으로 1부터++순회하며 나머지값이 0인것을 배열에 넣어주었다.

//다른풀이
function solution(n) {
  return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
  //길이가 n인배열을 만들었다.Array(정수)를 하면 정수 길이값만큼의 길이를 갖는 배열을 생성한다.
  //이후 fill로 0을 채워넣었다.
  //map으로 v는 각요소, 각요소를 각요소+인덱스+1을 해주었다. 첫번째 요소는 1,두번째요소는 2..이런식의 값을 갖게됨
  //filter로 약수만 걸러줬다. 
}