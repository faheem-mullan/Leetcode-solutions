
var topKFrequent = function(nums, k) {
    const map=new Map();
   for(const n of nums){
        const current=map.get(n)||0;
        map.set(n,current+1)
    }

    const sort=Array.from({length:nums.length+1},()=>[])

    for(const[num,freq] of map){
        sort[freq].push(num);
    }
    const result=[]
    for(let i=sort.length-1;i>=0;i--){
        for (const n of sort[i]){
        result.push(n)
        if (result.length === k) return result;
    }
    }
};