//내 풀이
function solution(cipher, code) {
  let answer = '';
  for (let i = code; i<=cipher.length; i+=code){
    //i를 code값만큼 증가시킨다. 초기값은 code.
    answer = answer + cipher[i -1]
    //인덱스는 0부터 시작하기에 -1을 해줬다.
  }
  return answer
}

//다른풀이
function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    //처음부터 code -1을 해줘도 된다.
    answer += cipher[i];
    //+=로 간단히 표시해줬다.
  }
  return answer;
}

//다른풀이
function solution(cipher, code) {
  return cipher.split('').filter((v,i)=>(i+1)%code===0).join('');
  //split로 배열로 만든 후, v는 각요소, i는 해당 요소의 인덱스.(해당 요소의 인덱스)+1을 나눴을때 나머지가 남지 않는 값을 필터로 걸러줬다. 이유는 인덱스값이 0이어도 첫번째 요소이기에 4번째 요소면 인덱스값이 3인지라 +1을 해준것이다.
  //이후 join으로 합쳤다.
}

//*내가 filter를 실패한 것은 1번째 요소가 인덱스로 치면 0이라는 것을 제대로 인지하지 못해서이다.
//*때문에 filter를 썼을때 결과값이 자꾸 밀렸다. 
//*filter를 사용하더라도 index값을 활용할 수 있다는 것을 알수 있었다.