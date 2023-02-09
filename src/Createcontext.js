import { createContext, useContext, useState } from "react";

// creating cart context here
let Cartcontext = createContext();



// creating cartcontext provider function and imported in index to send value to all childrens
function CartcontextProvider({ children }) {
    let [item, updateItem] = useState(0);
    return <Cartcontext.Provider value={{item,updateItem}}>
        {children}
    </Cartcontext.Provider>
}

// use cart function created for using values globally anywhere in code
let useCart = () => useContext(Cartcontext);

export { CartcontextProvider, useCart };
// exported all the thngs to use 