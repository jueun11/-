const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
// input = input[0];
// input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);
function solution(N, numbers) {
    // Write your code
    // 54321 
    // ['5','4','3','2','1']
    let sum = 0;
    //sum에 0을 넣음
    for (let i = 0; i<N; ++i){
        // 입력값 첫줄것보다 i가 작으면, i를 키운다. 여기서 N은 number의 숫자 갯수이다. 해석하면, number의 숫자 갯수만큼 해당 포문을 반복하는것
        sum += +numbers[i];
        //+=는 더하기  할당 연산자이다. 오른쪽 피연산자의(+number[i])값을 변수에 더한 결과를 다시 변수에 할당한다. 
        //number를 배열로 생각해서, 각 배열.. 0 1 2 3번째에 해당하는 숫자를 불러오고, 더하고, 그 더한값에 다시 더하고 대입하는 원리이다.
    }
    console.log(sum);

}