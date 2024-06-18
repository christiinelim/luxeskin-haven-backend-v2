### Create User
```
mutation($input: CreateUserInput!) { 
  createUser(input: $input) {
    username
    email
    first_name
    last_name
    contact
    address
  }
}

{
  "input": {
    "username": "example_username",
    "email": "example@email.com",
    "password": "example_password",
    "first_name": "John",
    "last_name": "Doe",
    "contact": "123456789",
    "address": "123 Example St"
  }
}
```

### Get User By Id
```
query($getUserId: ID!) {
  getUser(id: $getUserId) {
    email
  }
}

{
  "getUserId": 2
}
```