import client from '../Constents/apolo-clients';



const useQuery = async (query, variables = {}) => {
    try {
        const { data , loading, error} = await client.query({ query, variables });
        
        return {data, loading, error}
    } catch (err) {
        return {error: err}
    }
}

export default useQuery;