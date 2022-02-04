export const stock = async()=> {
    try{
        const res= await fetch('./json/cursos.json')
        const data = await res.json()
        return data;
    }catch(error){
        console.log(error)
    }
}