import { useGetAllHouses } from "../anapioficeandfire-client/apiCalls";

const HouseDetailsPages = () => {
    const houses = useGetAllHouses()
    console.log("houses", houses)
    return (
        <div className="housedetail">
    "House detail Page"
        </div>
    );
}

export default HouseDetailsPages;