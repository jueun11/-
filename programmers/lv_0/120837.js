//내풀이
function solution(hp) {
  return Math.floor(hp/5) + Math.floor((hp%5)/3) + hp - (Math.floor(hp/5)*5)-(Math.floor((hp%5)/3)*3) ;
  // 장군개미는 전체 hp/5를 한 정수, 병정개미는 장군개미의 나머지값을 3으로 나눈 정수, 일개미는 전체 hp에서 장군개미와 병정개미의 값을 뺀 값이다. 
}

//다른 풀이
function solution(hp) {
  return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
  //마지막 일개미 부분이 다르다. 해석하면 전체 hp에서 장군개미값5만큼 나누고 그 나머지를 3으로 나눈 나머지이다.
  //일개미는 1이기에 그냥 나머지의 나머지를 구해도 되었다.
}