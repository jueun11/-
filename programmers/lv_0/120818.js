//내풀이
function solution(price) {
  if (price >= 500000){
      return Math.floor(price*0.8);
  } else if (price >= 300000){
      return Math.floor(price*0.9);
  } else if(price >= 100000){
      return Math.floor(price*0.95);
  } else{
    return price;  
  }
}
//어려워서 참고를 많이했다. 할인같은 경우에는 5퍼센트 할인이라치면 5퍼센트 할인한 값은 값*전체값-할인률을 해주면 된다.
// price*0.8은 price*(전체값을1으로하고 할인률 0.2를 빼줘도 된다)
//if와 else if를 순서에 맞춰 잘 써야했다. 큰 수부터 조건을 충족못하면 다음 식으로 가도록 만들었다.
//모든 식을 충족하지않는 10만이하의 가격일 경우 할인없이 그대로 가격을 리턴한다. 