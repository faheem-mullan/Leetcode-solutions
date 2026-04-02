const groupAnagrams=(str)=>{
    const dict={}

    for(let s of str){

        let sort=s.split('').sort().join('');
    
    if(!dict[sort]){
        dict[sort]=[]
    }
    dict[sort].push(s)
    }
    return Object.values(dict)
}