function longestConsecutive(nums){
const numset=new Set(nums)
let maxlength=0
for(const num of numset){
    
    if(!numset.has(num-1)){
    let currentnum=num
    let length=1
    while(numset.has(currentnum+1)){
       currentnum++
       length++
       
    }
    if(length>maxlength){
        maxlength=length
    }
    
}

}
return maxlength
}