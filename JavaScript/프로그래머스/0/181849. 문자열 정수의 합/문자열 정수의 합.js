function solution(num_str) {
    return num_str.split('').reduce((acc,cur)=>acc+=parseInt(cur),0);
}