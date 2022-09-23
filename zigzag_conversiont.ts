

function convert(s: string, numRows: number): string {
    if (numRows <= 1) return s;

    const rows = new Array(numRows).fill("");

    let currRow = 0;
    let goingDown = false;
    for (const char of s) {
        rows[currRow] += char;
        if (currRow === 0 || currRow === numRows - 1) goingDown = !goingDown;
        currRow = goingDown ? currRow++ : currRow--
    }
    return rows.join("")
}
console.log(convert("PAYPALISHIRING", 3))

// P   A   H   N
// A P L S I I G
// Y   I   R
