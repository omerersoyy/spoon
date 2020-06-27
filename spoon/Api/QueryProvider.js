
import { gql } from "apollo-boost";

export const loginWithEmail = (email, password) => {
    return (
        `mutation
            {
                loginWithEmail(email: "${email}" password: "${password}") {
                token
            }
          }`
    )
}

export const pastOrders = (index, limit) => {
    return (
        gql`pastOrders (index: ${index}, limit: ${limit}) {
                total
                items {
                    name
                }
                restaurant {
                    name
                }
            }`
    )
}