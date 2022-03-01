export const validar = (values) =>{
    if(values.nombre.length<5){
        alert("El nombre es demasiado corto")
        return false
      }
      
      if(values.email.length<7){
        alert("El email es demasiado corto")
        return false
      }

      return true
}