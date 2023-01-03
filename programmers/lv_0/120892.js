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