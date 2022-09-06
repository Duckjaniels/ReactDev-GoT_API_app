import { useGetAllCharacters } from "../anapioficeandfire-client/apiCalls";
import MaterialTable from "material-table";


const CharactersPage = () => {
    const characters = useGetAllCharacters()
    console.log("Characters", characters)
    return (
        <div className="characters" style={{ maxWidth: '100%' }}>
            <MaterialTable
                columns={[
                    { title: 'Character', field: 'name' },
                    { title: 'Aliases', field: 'aliases' },
                    { title: 'Alive', field: 'born' },
                    { title: 'Gender', field: 'gender'},
                    { title: 'Culture', field: 'culture'},
                    { title: 'Allegiances', field: 'allegiances'}
                ]}
                options={{
                    paging:true,
                    pageSize:10,
                    emptyRowsWhenPaging: false,   // To avoid of having empty rows
                    pageSizeOptions:[6,12,20,50],
                }}
                data={characters}
                title="Characters"
            />
        </div>
    );
}

export default CharactersPage;