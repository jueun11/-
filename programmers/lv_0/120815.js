//풀이
function solution(n) {
  let pizza = 6; 
  var answer = 0;
  function fn_gcd(a, b) {
    //매개변수로 어떻게 b까지 가져오나 몰랐다. 자꾸 n만 입력되서 어떻게 하나 했는데
    //그냥 함수 안에 함수로 만들면 되는 방식이었다.
    //우선 최대 공약수를 구한다
      if(a%b == 0) {
        //재귀함수, 해당 if문 충족시 종료
          return b;
      } else {
          return fn_gcd(b, a%b);
        //a%b가 0이 아니면 해당 식 실행.. b가 위if문의 a, a%b가 위 if문의 b이다.
        //예를들어 a초기값이10이고 b가 6이면
        //6, 10%6 = 4
        //if()문 충족못함 6%4 2
        //그럼 다시 fn_gcd(b, a%b)실행. (4, 6%4 = 2)
        //if문 충족함 4%2 == 0 , 즉 2를 리턴
        //6과 10의 최대공약수는 2이다.
      }
  }
  function fn_lcm(a, b) {
    //최대 공배수 구하기
      return (a*b) / fn_gcd(a,b);
      // a*b한값을 / fn_gcd(a,b)로 나눠준다. 함수안에 함수
  }
  answer = fn_lcm(n, pizza) / pizza;
  //answer는 바로 위 fn_lcm(a, b)에 a에 n, b자리에 pizza조각 갯수인 6을 넣는다. 
  //함수안에서 다른 매개변수를 추가로 필요할 때 이렇게 추가로 함수를 만들고, 먼저 만든 변수를 넣는식으로 하면되는듯하다.
  //피자 판수를 구해야하기에 조각수만큼 나눠줬다.
  return answer;
}