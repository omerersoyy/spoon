
import ApolloClient from 'apollo-boost';
import { create } from 'apisauce'

const createClient = () => {

    const client = create({
        baseURL: 'http://209.250.226.42:8083/graphql',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const setHeader = (token) => {
        client.request = (operation) => {
            operation.setContext({
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
        }
    }

    const mutate = (query) => {
        client
            .mutate({
                mutation: query
            })
    }

    const post = (query) => client.post(client.baseURL, {
            query: query
        }
    )

    return {
        client,
        setHeader,
        mutate,
        post
    }
}

export default {
    createClient
}



