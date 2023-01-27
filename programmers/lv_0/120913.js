// *내풀이
function solution(my_str, n) {
  var answer = [];
  let start = 0;
  let end = n;
  for (let start = 0; start < my_str.length; start += n) {
    //반복할 때마다 start - 시작지점을 n만큼(end)크게해줬다. 그러면 겹치지않고 이전에 따온 배열의 다음을 가져올 수 있다. 그리고 이 start는 전체 길이 값을 넘치게 갈 수 없기에 조건에 문장의 길이를 넣었다.
    answer.push(my_str.slice(start, end));
    //slice는 start부터 end-1까지의 index값을 가진 배열을 반환한다.
    end += n;
    //끝나는 지점을 업데이트해준다.
  }
  return answer;
}

// *다른 풀이 - 정규표현식
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
  //match는 정규표현식과 일치하는 부분을 찾는다. 그리고 일치하는(매칭되는)부분을 배열로 반환한다.
  //{m, n} : m회 이상, n회 이하
  // (dot)은 어떤 문자와 일치하며 {} ( curly braces)는 그 앞에 있는 문자가 몇 번 반복되는지 정의한다.
  //이 패턴은 1부터 n까지의 문자를 일치시킨다.
  //.은 문자와 일치하는 패턴이다. .이 모든 문자를 의미한다고 보면되는듯
  //g는 글로벌, 전체문자 검색
  //? 왜 중복되지않게 다음으로 넘어가는지 모르겠다.
  //이는 match함수를 사용해서 그런것이다. match는 검색과 일치하는 문자열을 반환할 때, 중복을 방지하기 위해 기존 배열을 순차적으로 잘라서 진행한다. 때문에 순차적 진행 + 모든 문자 1~ n의 규칙에 따라 중복되지않게 값을 반환할 수 있는것이다.
}

// *다수의 풀이
function solution(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) {
    //start 대신 그냥 i로 해주고
    res.push(my_str.slice(i, i + n));
    //끝값도 i를 활용하였다.i값에 n을 더해주면, i는 반복시마다 늘어나고 있기에 따로 end변수를 만들 필요없었다.
  }
  return res;
}
