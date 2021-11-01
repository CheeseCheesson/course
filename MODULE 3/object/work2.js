const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];


function giveTalonsInOrder(orders, peoples){
    const newArr = []

    for(let i = 0; i < orders.length; i++){
       
        for(let j = 0; j < peoples.length; j++){
         
           if(orders[i] === peoples[j]['id']){
            newArr.push(peoples[j])
           }
           
        }
    }
    return newArr
}
console.log(giveTalonsInOrder(ordersArr, people))