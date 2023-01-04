//내풀이
function solution(box, n) {
    return box.reduce((acc,cur) => acc*Math.floor(cur/n),1);
    //n보다 box요소가 크더라도 Math.floor하면 그럴경우 0으로 떠서 뭘 곱하던 0을 리턴하도록 했다.
    //reduce를 사용할지 다른걸 사용할지 좀 헤매었다. 배열 내에서 반복할 시 되도록 배열함수를 써주자.
}

//다른풀이
function solution(box, n) {
    let [width, length, height] = box;
    //직관적으로 지정해주었다. 배열에 다른 배열명을 넣어주면 이런식으로 지정이 되는구나
    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
    //가로나누기 주사위, 높이나누기 주사위. 높이나누기 주사위를 전부 곱해주면 되는 문제다. 
    // 처음에 이 생각을 못해서 푸는게 오래걸렸다. 문제가 있으면 문제를 이해하는데 집중하도록 하자.
}