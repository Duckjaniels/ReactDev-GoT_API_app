import { useGetAllHouses } from "../anapioficeandfire-client/apiCalls";
import MaterialTable from "material-table";

const HouseDetailsPages = () => {
    const houses = useGetAllHouses()
    console.log("houses", houses)
    return (
        <div className="housedetail" style={{ maxWidth: '100%' }}>
            <MaterialTable
                columns={[
                    { title: 'Name of the House', field: 'name' },
                    { title: 'Region', field: 'region' },
                    { title: 'Coat of Arms', field: 'coatOfArms' },
                    { title: 'Words', field: 'words'},
                    { title: 'Titles', field: 'titles'},
                    { title: 'Seats', field: 'seats'},
                    { title: 'Has died out', field: 'diedOut'},
                    { title: 'Number of Cadet Branches', field: 'cadetBranches'},
                ]}
                options={{
                    paging:true,
                    pageSize:25,
                    emptyRowsWhenPaging: false,
                    pageSizeOptions:[10,15,20,50],
                }}
                data={houses}
                title="Houses"
            />
        </div>
    );
}

export default HouseDetailsPages;