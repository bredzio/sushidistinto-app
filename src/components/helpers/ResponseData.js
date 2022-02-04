import { cursos } from "../../data/cursos"

export const ResponseData = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(cursos)
        }, 3000)
    })
}