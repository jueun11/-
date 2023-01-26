// *내풀이
function solution(numbers) {
  let en = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //각각의 배열을 만들어준 뒤
  for (let i = 0; i < en.length; i++) {
    numbers = numbers.replaceAll(en[i], num[i]);
    //en에 해당하는 numbers부분을 숫자로 바꿔주었다.
  }
  return +numbers;
  //문자열이라 +붙여서 숫자로 바꿈
}

//! 내가 겪은 문제는 처음에 빈 배열에 push로 숫자를 붙이려해서, 무조건 먼저 스캔한 문자열... 0부터 붙여서 문제였다. 이를 push로 문자열을 복사하는 것이 아니라 아예 기존 문자열을 계속해서 수정하는 식으로 바꿧다.

// *다른풀이
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  //객체를 만들었다. 영어에 각 숫자가 들어감
  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return obj[v];
    }
  );
  // replace의 두번째 인자로 함수를 전달하였다.
  //정규표현식 활용, / /부분에 있는 영어를 문자열에서 발견하면 그 문자열을 obj[문자열]한다. 그럼 그 문자열에 대응하는 값이 return된다.
  //이렇게 리턴된 값은 다시 replace로 돌아가 그 영어를 값으로 바꿔준다.
  return Number(num);
}
