// let numbers=[4,7,9,43,12,65,34,23]

// numbers.sort(function(a, b){return b-a});

// console.log(numbers);



let mont=["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr"]

function montnum(mont){

    let newMont=[];
    let num=1;
for (let i = 0; i < mont.length; i++) {
    
    mont[i]+= -num
    newMont.push( mont[i])
    num++;
    

    
}
return newMont
}
console.log(montnum(mont))