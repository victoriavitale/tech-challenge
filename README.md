# Users List API

A service that returns data from a list of users.
This is an example of a small API built with Node.js and Express.js which retrieves data from a MongoDB database.

### Root URL

https://users-list-api.now.sh

### Methods

    GET /users
    GET /users/:id

### User Model
- '_id' - User ID (Type: String);
- 'firstName' - User first name (Type: String);
- 'lastName' - User last name (Type: String);
- 'avatar' - User avatar url (Type: String);
- 'bio' - User bio (Type: String;


# Get all Users

Returns the complete list of users


    GET /users


### Example
**Request**

    https://users-list-api.now.sh/users

**Response**
``` json
[
    {
    "_id": "7e96dce9-7c07-49b2-8059-f421b108c659",
    "firstName": "Beale",
    "lastName": "Kochlin"
    },
    {
    "_id": "0d6fa1a2-2af0-4f63-a0a9-9677b5648287",
    "firstName": "Rorie",
    "lastName": "Shepheard",
    "avatar": "https://robohash.org/quisquamtemporalaboriosam.jpg?size=100x100&set=set1",
    "bio": "innovate transparent solutions"
    },
]
```


# Get User By ID

Returns json data from a single user filtered by ID


    GET /users/{id}

### URL Params

**Required**
- **id=[string]** - User ID

### Example
**Request**

    https://users-list-api.now.sh/users/2edc7426-8fa7-4c92-bdfb-4f0824f1fa97

**Response**
``` json
[
    {
        "_id": "2edc7426-8fa7-4c92-bdfb-4f0824f1fa97",
        "firstName": "Fraze",
        "lastName": "Rigmand",
        "avatar": "https://robohash.org/doloremaspernaturconsequatur.jpg?size=100x100&set=set1",
        "bio": "architect cross-platform e-markets"
    }
]
```


## Running the application in your local enviroment

### Required
- Node
- npm

### Instructions

- Before running the application, run **npm install** to install all dependencies
- Run the application with **node index**

###Notes    
Application will run in port 5000 by default


