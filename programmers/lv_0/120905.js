//내풀이
function solution(n, numlist) {
  return numlist.filter(el => el%n === 0);
  //filter를 활용하여 요소가 정확히 나눠지는 값만 가져왔다.
}

//*다른 풀이들을 보다가 안건데, function solution(n, numlist)의 인자값에 a,b같은걸 넣어도 제대로 작동한다.
//다른 풀이들도 거의 이 방식으로 풀어서 따로 다른풀이를 작성하지않는다.