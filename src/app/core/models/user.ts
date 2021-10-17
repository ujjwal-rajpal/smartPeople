
export interface User {
        "id": number,
        "name": {
          "firstName": string,
          "lastName": string
        },
        "gender": string,
        "dob": string,
        "address": {
          "lineOne": string,
          "lineTwo": string,
          "city": string,
          "state": string,
          "landMark": string,
          "pincode": number
        },
        "email": string,
        "phone": number
}
