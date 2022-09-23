function reverse(x: number): number {
    const sign = x > 0 ? 1 : -1;
    const reversedInteger = sign * parseInt(x.toString().split("").reverse().join(""), 10);
    return reversedInteger > 2 ** 31 - 1 || reversedInteger < -1 * 2 ** 31 ? 0 : reversedInteger;
}

function reverseV2(x: number): number {
    let reversedInteger = 0;
    let pop = 0;
    const sign = x > 0 ? 1 : -1;
    x = Math.abs(x);
    while (x != 0) {
        pop = x % 10;
        x = Math.floor(x / 10);
        reversedInteger = reversedInteger * 10 + pop;

        if (reversedInteger > 2 ** 31 - 1 || reversedInteger < -1 * 2 ** 31) return 0;
    }
    return reversedInteger * sign;
}

console.log(reverseV2(-321))
console.log(Math.abs(-300))