//내풀이
function solution(money) {
    let answer = [Math.floor(money/5500),money%5500];
    return answer;
}

//다수의 풀이
function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}
//굳이 answer라는 함수를 지정 할 필요없이 바로 배열 []을 출력해도 된다. /과 % 옆에 스페이스를 줘서 가독성을 높였다.