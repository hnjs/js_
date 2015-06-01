var fibonacci = function(n) {
    var memo = [];
    return function fib(n) {
        if(n==0 || n == 1) return n;
        if (memo[n]) return memo[n];
        memo[n] = fib(n-1) + fib(n-2);
        return memo[n];
    }(n);
}
