function solution(s) {
  let arr = s.split('');
  let answer = []
  arr.forEach((el) => {
      if(arr.indexOf(el) === arr.lastIndexOf(el)){
          answer.push(el);
      }
  })
      
  return answer.sort().join("");
}

//lastIndexOf는 해당 요소의 인덱스를 출력하는데, 중복된 값이 있을 경우 뒤의 인덱스 값을 반환한다. 때문에 중복 요소가 있을시, indexOf에서는 앞의 값을 불러오기에 거짓이다. 