import { Curso } from "../Cursos/Curso";

export const CursosList = ( {cursos} ) => {
    return (
        <>
        <div className="row">
                { cursos.map( (el, i) => <Curso key={i} {...el}/> )}
        </div> 
        </>
    )
}



