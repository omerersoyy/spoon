
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

export const restaurants = (index, limit) => {
    return (
        `query {
            restaurants (showOffline: true, index: ${index}, limit: ${limit}, delivery: false){
              name
              open
              types{
                name
              }
            }
          }`
    )
}

export const pastOrders = (index, limit) => {
    return (
        `query {
          pastOrders (index: ${index}, limit: ${limit}) {
            uid
            total
            userCanReOrder
            items {
              name
            }
             restaurant {
              name
            }
          }
        }`
    )
}

export const user = () => {
    return (
        `query {
          user {
            firstName
            lastName
            mobileNumber
            profilePicture{
              url
            }
            email
            addresses {
              addressLine1
            }
          }
        }`
    )
}

