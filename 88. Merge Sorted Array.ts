/**
 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n == 0 || n < 0) return; // no use if n is empty or negative(invalid)
    else nums1.splice(-n);       // remove the zeroes at the end
    
    // some more edge-cases
    // it would be nice if nums1 = nums2 would be possible, but no new init is allowed
    if (m == 0) {
        nums2.forEach((num) => {
            nums1.push(num)
        });
        return;
    } 

    // main logic
    let startIndex = 0; // to start where we stopped last time

    nums2loop: for (let i = 0; i < n; i++) {
        let numberToInsert = nums2[i];
        
        nums1loop: for (let k = startIndex; k < nums1.length; k++) {
            let numberToCompare = nums1[k];
            
            if (numberToInsert < numberToCompare) { 
                nums1.splice(k, 0, numberToInsert); // splice: O(n) 
            } else if(numberToInsert >= numberToCompare && k == nums1.length-1) {
                nums1.push(numberToInsert); // push: is O(1) - so if possible, we use it
            } else continue nums1loop; // ignore the remaining part if nothing is true;
            
            startIndex = k; // set the new index (it is only possible because nums are sorted)
            continue nums2loop; // continue with other outerloop cause we found the right place for our current number
        }
    }
};
