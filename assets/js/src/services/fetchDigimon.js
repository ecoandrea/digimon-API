
export const fetchAllDigimon = async() => {
    try {
        const response = await fetch('https://digi-api.com/api/v1/digimon') //promesa
        if(!response.ok) throw new Error('Error al traer a los Digimon')
        const data = await response.json() //promesa que se convierte a json para que retorne datos
    
        return(data)
        
    } catch (error) {
        console.error(error)
    }
}

fetchAllDigimon()