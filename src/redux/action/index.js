

// for add to item card
export const addcard=(Product)=>{
    return{
        type:"ADDITEM",
        payload:Product
    }
}
// for Deleted to from card
export const dlcard=(Product)=>{
    return{
        type:"DELITEM",
        payload:Product
    }
}