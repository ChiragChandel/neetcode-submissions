class Solution {
    firstMissingPositive(nums) {
        const n = nums.length;

        //step 1: marking useless values (0, -ve and values greater than n)
        for(let i = 0; i < n; i++){
            if(nums[i] <= 0 || nums[i] > n){
                nums[i] = n + 1;
            }
        }

        //step 2: marking presence
        for(let i = 0; i < n; i++){
            const num = Math.abs(nums[i]);

            if(num <= n){
                nums[num - 1] = -Math.abs(nums[num - 1]);
            }
        }

        //find first missing positive
        for(let i = 0; i < n; i++){
            if(nums[i] > 0){
                return i + 1;
            }
        }

        //if all present then return n + 1
        return n + 1;
    }
}