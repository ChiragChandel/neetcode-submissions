class Solution {
    
    mergeAlternately(word1, word2) {
        let p1 = 0;
        let p2 = 0;
        let res = "";

        while (p1 < word1.length && p2 < word2.length){
            res += word1.charAt(p1);
            res += word2.charAt(p2);
            p1++;
            p2++;
        }
        if(word1.length != 0){
            res += word1.slice(p1);
        }
        if(word2.length != 0){
            res += word2.slice(p2);
        }
        return res;
    }
}
