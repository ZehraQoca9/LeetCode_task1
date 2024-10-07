let nums = [2,7,11,15];
let target = 9;

function sum (nums, target){
    const numToIndex = {};

    for(let i=0; i<=nums.length; i++){;
    const complement = target - nums[1];

    if(complement in numToIndex){
        return [numToIndex[complement], i];
    }
    numToIndex[nums[i]] = i;
}

// return [];
}

alert(sum(nums,target));

// ---------------------------------------------

const strs = ["dog","racecar","car"];

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "not found!";
            
        }
    }
    return prefix;
}

alert(longestCommonPrefix(strs));



