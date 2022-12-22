//내 풀이
function solution(n) {
    let answer =0;
    for(let i = 0; i <= n; i++){
      //n이하의 숫자를 전부 순차적으로 가져옴
        if(i%2 == 0){
          //%는 나누기를 하고, 나머지를 찾는 산술연산자이다. 2로 나눴을때 나머지가 0이란 것은, 짝수라는 의미. 만일 가져온 숫자(i)가 짝수라면  
            answer += i;
            // answer에 해당 숫자를 더해준다.
        }
    }
    return answer;
}

//다른풀이
function solution(n) {
  //n을 11로 치면 이하의 짝수는 2,4,6,8,10이다. 이를 모두 더하면 30
    var half = Math.floor(n/2);
    //Math.floor는 소숫점 이하를 버린다. 예를들어 n값이 10이라 치면 11/2 = 5.nnnnnn -> 5로 표시하는 것이다.
    return half*(half+1);
    // 5*(5+1); -> 30
}
//수학두뇌차이가 느껴졌다.. 단순히 짝수를 걸러내서 계산하는 것이 아니라 산술활용이 뛰어나야 할듯 싶다.
//if for문과 +-%같은 산술연산자만 단순히 쓰기보단,  Math.floor같은 함수를 좀 더 활용해보도록하자
