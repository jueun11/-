//내풀이
function solution(array, n) {
    return array.filter(i => i == n).length;
}
//filter를 사용하였다. filter로 n으로만 이뤄진 배열을 반환하고, 이의 length값을 반환하는 방식으로 간단히 작성했다.
//이때 다른사람들은 ==대신 === 을 사용하였는데 ===이 좀 더 엄격한 비교연산자로, 값 뿐만 아니라 변수타입(string, number...)까지 고려하는 방식이었다.
//다수의 풀이가 내 풀이와 유사하기에 다른 풀이는 넘어간다.  