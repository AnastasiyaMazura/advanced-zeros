module.exports = function getZerosCount(number, base) {
    var prime_number = [], primes = [];

    function generation_of_prime_divisors(b)
    {
        let ret = {};
        for(let i = 0; primes[i] <= b; ++i)
        {
            if(Math.floor(b)%Math.floor(primes[i])==0)
            {
                ret[Math.floor(primes[i])] = 0;
                while(Math.floor(b)%Math.floor(primes[i])==0)
                {
                    b /= primes[i];
                    ret[Math.floor(primes[i])] += 1;
                }
            }
        }
        return ret;
    }

    function generation_of_primes()
    {
        for(var i = 0; i < 300; ++i)
            prime_number.push(1);

        prime_number[0] = prime_number[1] = 0;

        for(i  = 2; i <300; ++i)
            if(prime_number[i])
            {
                primes.push(i);
                for(let j = i*i; j < 300; j+=i)
                    prime_number[j] = 0;
            }
    }

    function count_of_0(N, b)
    {
        let prime_divisors = generation_of_prime_divisors(b);
        let ret_arr = [];
        for(let key in prime_divisors)
        {
            let step_of_key = prime_divisors[key];
            let temp = 0;
            for(var i = key; i <= N; i *= key)
            {
                temp += Math.floor(N / i);
            }
            ret_arr.push(Math.floor(temp / step_of_key));
        }
        let minimum = Math.floor(100000000);
        for(i = 0; i < ret_arr.length; ++i)
            minimum = Math.min(minimum, ret_arr[i]);
        return minimum;
    }

    generation_of_primes();

    return count_of_0(number, base);
}