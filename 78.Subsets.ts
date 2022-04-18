// Time-Complexity: O(N*N^2) ( O(N^2) to generate all subsets and O(N) from concat )
// Space-Complexity: O(N*N^2) ( O(N^2) number of subsets and O(N) for each subset )

function subsets(nums: number[]): number[][] {
    const subSets: number[][] = [[]]; // init, [] is always first value

    for (let i = 0; i < nums.length; i++) { // go through all input-numbers
        subSets.push([nums[i]]); // push the current number
        const currentLength = subSets.length; // get the length of the >> current subSets << 
        for (let k = 1; k < currentLength - 1; k++) { // go through the >> current subSets <<
            subSets.push(subSets[k].concat(nums[i])); // merge(get the combination of) the current number with every subSet in the list "subSets", push it in subSets and get updated subSets  
        }
    }
    return subSets;
};
