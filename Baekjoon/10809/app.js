const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
solution(input[0]);
function solution(S) {
    //현재 s는 baekjoon이다.
    // 알파벳 소문자 => 26 a-z
    // 길이가 26인 배열 answerArray. 배열의 0번째는 a, 배열의 1번째 b
    // b가 나왔을 때 -> answerArray[1] 현재 배열 돌고 있는 index를 넣어주면 되겠죠?
    // a가 나왔을 때 -> answerArray[0] 현재 배열 돌고 있는 index를 넣어주면 되겠죠?
    // b의 ASCII : 98 - 97 => 1
    // a의 ASCII : 97 - 97 => 0
    //아스티 코드를 알아야 하는 문제였다. 
    let answerArray = new Array(26).fill(-1);
    //answerArray라는 배열을 만든다. new Array는 생성자 함수이다. 26은 배열요소의 갯수이다. fill은 배열 시작부터 끝까지 정적인 값 하나로 채우는 메서드이다.
    for (let i = 0; i < S.length; ++i) {
        //baekjoon의 길이만큼 해당 식을 반복한다. (8번)
        let nowChar = S[i];
        // nowChar 는 b a e k j o o n 이 순차적으로 대입된다.
        let answerArrayIdx = nowChar.charCodeAt() - 97;
        // answerArrayIdx 는 위 영어의 아스티 코드에서 - 97을 한 값이다.
        // b a e k j o o n을 순차적으로 -97한 값을 넣게된다
        // 여기서 answerArrayIdx는 총 알파벳 숫자 이상으로 커질 수 없다(최대 26)
        if (answerArray[answerArrayIdx] === -1) {
            //해당 if문은 전체 배열에서 영어에 해당하는 순서의 요소를 찾는것이다. -1로 된 answerArray[아스티코드-97]가 -1이라는 디폴트 값이라면
            //예를 들어 b가 나왔다 치면. answerArray[1]은 현재 -1이므로
            answerArray[answerArrayIdx] = i;
            //-1로 된 answerArray[아스티코드-97번째 요소]에 i 값을 넣는것이다. 여기서 i는 0부터 단어의 길이까지 점점 커지는 숫자이다.
            //answerArray 두번째 요소에 i값...0을 넣게되는 것이다.
        }
    }
    let answer = '';
    for (let i = 0; i < answerArray.length; ++i) {
        answer += answerArray[i] + ' ';
        // process.stdout.write(answerArray[i] + ' ');
    }
    console.log(answer);
}

//요소가 26개 있는 배열에서 각 알파벳 아스티 코드를 활용하여(왜냐면 아스티-97을 해도 최대 알파벳 수를 초과하지 않기에), 배열의 순서를 찾아가고(각 알파벳에 해당하는 배열요소), 해당 배열요소에 인덱스값을 집어넣는다!!

