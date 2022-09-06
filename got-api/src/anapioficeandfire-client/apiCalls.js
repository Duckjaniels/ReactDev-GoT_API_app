import {useState, useEffect} from "react"
export const useGetAllHouses = () => {
    const [allHouses, setAllHouses] = useState([])

    useEffect(() => {
        const temp_allHouses = fetch('https://anapioficeandfire.com/api/houses')
            .then((response) => response.json())
            .then((data) => setAllHouses(data));
    },[])
    return allHouses
}

export const useGetAllCharacters = () => {
    const [allHouses, setAllHouses] = useState([])

    useEffect(() => {
        const temp_allHouses = fetch('https://anapioficeandfire.com/api/characters')
            .then((response) => response.json())
            .then((data) => setAllHouses(data));
    },[])
    return allHouses
}

