//내풀이
function solution(sides) {
  let a = Math.max(...sides);
  let b = 0;
  for (items of sides){
      b =+ b+items;
  }
  return b-a>a ? 1:2;
}
//최대값을 구하고 삼항연산자로 1과2를 띄울수 있게 했다.

//따봉 많은거

function solution(sides) {
    sides = sides.sort((a,b) => a-b)
    //sort로 배열을 정렬해준다. a-b로 숫자를 오름차순으로 정렬
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
    //오름차순으로 정렬했기에 [0]과 [1]은 작은 숫자 2개이다. 이것이 마지막 세번째 숫자보다 크면1, 작으면2를 return한다.
}