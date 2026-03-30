function isAnagram(s,t){

const count={}

for(c of s){
    count[c]=(count[c]||0)+1
}
for(c of t){
     count[c]=(count[c]||0)-1
}
return Object.values(count).every(v=>v===0)
}