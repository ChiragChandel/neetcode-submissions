class Solution {
    numRescueBoats(people, limit) {
        people = people.sort((a, b) => a - b);

        let l = 0, r = people.length - 1;
        let boats = 0;

        while (l <= r) {
            if (people[l] + people[r] <= limit) {
                l++;
            }
            r--;
            boats++;
        }
        return boats;
    }
}
