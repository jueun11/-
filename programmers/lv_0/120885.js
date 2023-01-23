// *내풀이
function solution(bin1, bin2) {
  return (parseInt(bin1, 2)+parseInt(bin2, 2)).toString(2);
  //parseInt(bin1, 2)는 n진수를 10진수로 바꾼다. 첫번째가 입력받은 숫자, 두번째가 몇진수인지를 의미한다.
  //toString은 10진수를 2진수로 바꿀때 사용한다.
}
