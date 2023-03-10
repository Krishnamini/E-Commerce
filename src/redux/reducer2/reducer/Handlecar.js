import Product from "../../../Components/Product";

const  card=[];
 const  handleCard=(state=card,action)=>{
    const  product=action.payload;
    switch (action.type) {
        case "ADDITEM":
            // cheack  if Product is Already Exits

            const exist=state.find((x)=>x.id===product.id);
            if (exist) {
                // increase the qyt
                return state.map((x)=> x.id===product.id ?{...x,qty:x.qty+1}:x);
                
            }
            else{
                const product=action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }
                ]
            }

            
            break;
    
       case "DELITEM":
        const exist1=state.find((x)=>x.id===product.id)
        if (exist1) {
            return  state.filter((x)=>x.id!==exist1.id)
            
        }
        else{
            return state.map((x)=>x.id===product.id?{...x,qty:x.qty-1}:x)

        }
        break;

        default:
         return   state;
        break;

    }
 }
 export default handleCard;