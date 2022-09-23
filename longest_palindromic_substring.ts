function longestPalindrome(s: string): string {
    if (s === reverse(s)) return s;
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            const s1 = s.slice(i, j);
            if (longest.length >= s1.length) continue;
            if (s1.length <= 1) {
                if (longest.length < s1.length) {
                    longest = s1;
                }
                continue;
            }
            if (s1[0] !== s1[s1.length - 1]) continue;
            const s2 = reverse(s1)
            console.log(s1, s2)
            if (s2 === s1 && longest.length < s2.length) {
                longest = s2
            }
        }
    }
    return longest;
}

function reverse(s: string) {
    let str = ""
    for (let i = s.length - 1; i >= 0; i--) {
        str += s[i]
    }
    return str
}

//console.log(longestPalindrome("babad"))
console.log(longestPalindrome("abacdfgdcaba"))
//console.log(longestPalindrome("cbbd"))
//console.log(longestPalindrome("jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx"))
