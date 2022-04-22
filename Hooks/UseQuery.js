import client from '../Constents/apolo-clients';



const useQuery = async (query, variables = {}) => {
    const { data , loading} = await client.query({ query, variables });
    return {data, loading}
}

export default useQuery;