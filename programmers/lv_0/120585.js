function solution(array, height) {
  return array.filter(i=> i > height).length;
  //이전 120583문제와 동일하게 필터를 사용하였다. 머쓱이보다 큰 사람으로만 이뤄진 배열을 만들고, 그 배열의 길이.. 요소숫자를 반환
}