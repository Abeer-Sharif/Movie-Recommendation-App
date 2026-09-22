import { Client, TablesDB, Query, ID } from 'appwrite'

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID

// Connect to Appwrite
const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

// Create TablesDB service
const tablesDB = new TablesDB(client)
// Update the number of times a search term has been searched
export const updateSearchCount = async (searchTerm, movie) => {
    //1. Use Appwrite SDK to check if the search term exists in the database
    try {
        const result = await tablesDB.listRows({
            databaseId: DATABASE_ID,
            tableId: TABLE_ID,
            queries:[
                Query.equal('searchTerm', [searchTerm])
            ]
        })
        if (result.rows.length > 0) {
            const doc = result.rows[0];
           // 2. If it does exists, increase count
            await tablesDB.updateRow({databaseId: DATABASE_ID, tableId: TABLE_ID, rowId: doc.$id, data:{count:doc.count+1}})
        }
        // 3. If it doesnt, create a new row with the search term and count as 1
        else {
            await tablesDB.createRow({
                databaseId: DATABASE_ID, tableId: TABLE_ID, rowId: ID.unique(), data: {
                    searchTerm,
                    count: 1,
                    movie_id: movie.id,
                    poster_url:`https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }})
        }
    } catch (error) {
        console.log('Error updating search count:', error)
    }
    
}

export const getTrendingMovies = async () => {
    try {
        const result = await tablesDB.listRows({
            databaseId: DATABASE_ID, tableId: TABLE_ID, queries: [
                Query.orderDesc('count'),
                Query.limit(5)
                
            ]
        })
        
        return result.rows;
    }catch (error) {
        console.log('Error updating search count:', error)
    }
}