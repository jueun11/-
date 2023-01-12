// *내풀이
function solution(n) {
    let answer = 1;
    for(let i = 1; answer<=n; i++){
        answer = answer*i;
        if(answer>n){
          return i-1; 
          //초과했을때 마지막값을 리턴하기에 초과하기 전 값을 구해준다 
        }
        else if(answer>=n){
          //n과 값이 같아서 초과하지 않았다면 그대로 리턴
          return i;  
        }
    }
}

// *다른풀이
function solution(n) {
    let i = 1;
    let f = 1;
    while (f*i < n) f*=++i;
    //while은 조건이 참일때 반복 실행된다. i*f가 n보다 작으면 f*=++i실행. 
    //f에 i값을 곱해주는데, 식이 실행될때마다 i값이 증가하는 방식이다.
    return i;
    //작을때만 실행이기에 따로-1을 해줄 필요가 없다.
}