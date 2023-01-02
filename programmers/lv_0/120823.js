//참고 많이 한 내풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let answer = ""
    //정답부분이 ""으로 묶여있어서 처음에 ""을 넣어주었다.
        for(let a = 0; a<input[0]; a++){
          //가져온 숫자값만큼 높이가 쌓아진다. \n으로 줄바꿈된다.. 줄바꿈횟수 = 숫자값(높이)
            for(let b = 0; b <= a; b++){
              //높이와 너비가 직각인 이등변 삼각형을 만들어야한다.
              //for문에 input[0]을 가져오면 3만 계속 출력된다. 3보다 작거나 같으면 반복수행하기에 3이 될때까지.. *을 3개까지 채우게되기때문이다.
              //for문안에 for문으로 a값이 증가할때마다 실행된다. 때문에 a실행횟수(3)이 되는 동안 증가하는 a값을 가져와서 사용하면 점점 증가하는 값을 가져올 수 있다.
                answer+= "*";
            }
          answer+= "\n";
          //\n은 줄바꿈 할 때 사용된다. 별한줄 만들고 \n을 붙여넣는걸 반복한다.
    }
    console.log(answer);
});


//다수의 풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (let i = 1; i <= +input[0]; i++) {
      //+를 사용하면 숫자로 변환시킨다.
        console.log('*'.repeat(i));
        //i의 횟수만큼 *을 반복한다. 해당 for문은 +input[0]만큼 실행된다. 실행될때마다 줄바꿈 없이 해당 콘솔 실행.
        //console이 아예새로 찍히면 자동으로 줄바꿈됨. 따라서 증가하면서 1회 찍고, 이후 다음반복에서 2를 찍고, 다음에 또 증가된 마지막 3회를 찍는것이다.
    }
});

//*어느 부분에 풀이를 작성해야하는지 좀 헤매었다. input[0]은 단순히 입력값이었다. 반복문을 사용할 때는 repeat를 활용할 수 있을지 다시한번 생각하자. for문 안에서 for로 증가하는 변수를 사용하는 방법을 익히자