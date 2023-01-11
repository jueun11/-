// *내풀이
function solution(my_string) {
  return [...my_string.toLowerCase()].map((el) => el.codePointAt(0)).sort((a,b) => a - b).map((el) => String.fromCharCode(el)).join("");
  //[]안에 소문자로 이뤄진 배열로 가져오고, map으로 문자를 아스키코드로 바꿔준뒤, 아스키코드를 기준으로 오름차순으로 정렬했다. a가 젤 작음
  //그리고 다시 문자로 바꾸고, join으로 합쳤다.
}

// *다른 풀이
const solution=(s)=>[...s].map(e=>e.toLowerCase()).sort().join("");
//Arrow function을 사용하였다. 
//[]에 배열로 가져오고 map돌려서 소문자로 바꿔준후 정렬했다. 문자를 정렬하면 자동으로 a부터 정렬된다 괜히 아스키코드를 사용했다;;
//이후 join으로 다시 합침