# List of server api urls

# List of API end

1. 

url: 'https://localhost/getAllHouse/'
server end: getAllHouse

returns 

all the house data

request type: fetch

2. 

url: 'https://localhost/getAllHouse/:id'

server end: getAllHouse/:id

returns 

house data with specif id

request type: fetch

3.

url: 'https://localhost/requestBooking'
server end: requestBooking

stores home details request booking form data  
to server

request type: post

object fields: fullName: string,

phoneNumber: string,

email: string,

message: string

4.

url: 'https://localhost/createAccount'
server end: createAccount
stores user data when user create account using create account form 

request type: post

object fields: name: string,

email: string,

password: string



5. url: 'https://localhost/houses/' + loggedInUser.email
work: list house for a user
server end: bookings/:email

returns 

all the house  data of a user matching email

request type: fetch

6. url: 'https://localhost/addHouse'
work: add house for a user
method: post
 body: formData

 formData is a object

 object fields

 serviceTitle: string

 price: number

 location:string

 noBedroom:number

 noBathroom:number

 thumbnail: base64 image


 
7. url: 'https://localhost/houses/' + loggedInUser.email

server end: houses/:email

returns 

all the houses  data of a user matching email

request type: fetch