var twoSum = function(nums,target){
    const map=new Map();

    for (let i=0;i<nums.length;i++){
        const currentnum=nums[i];
        const complement=target - currentnum;

        if(map.has(complement)){
            return [map.get(complement),i];
        }
        map.set(currentnum,i)


    }
};