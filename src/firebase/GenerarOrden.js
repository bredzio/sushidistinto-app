import { collection, writeBatch, getDocs, addDoc, Timestamp, query, where, documentId } from "firebase/firestore"
import { db } from "./config"

export const GenerarOrden = async(values, cart, valorTotal, setOrderId, vaciarCarrito)=>{
        const orden = {
          comprador: values,
          items: cart,
          total: valorTotal(),
          timeStamp: Timestamp.fromDate(new Date())
      }
  
        const batch = writeBatch(db)  
        const ordersRef= collection(db, "orders")
        const productosRef=collection(db,"productos")
        const q = query(productosRef, where(documentId(), 'in', cart.map((el)=>el.id)))
  
        const productos = await getDocs(q)
        const outOfStock=[]
  
        productos.docs.forEach((doc)=>{
          const item=cart.find((el)=> el.id===doc.id)
          if(doc.data().cantidad>=item.cantidad){
            batch.update(doc.ref, {
              cantidad:doc.data().cantidad-item.cantidad
            })
          }else{
            outOfStock.push(item)
          }
        })
  
        if(outOfStock.length===0){
          addDoc(ordersRef,orden)
          .then((doc)=>{
            batch.commit()
            setOrderId(doc.id)
            vaciarCarrito()
          })
  
        }else{
          alert("Hay productos no disponibles")
        }
        
    
}