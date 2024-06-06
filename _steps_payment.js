/* 
To add stripe payment gateway :

client side : 
    1.install stripe and stripe from stripe docs or npm
    2.create card element
    3.create stripe account and get pk(publishable key)
    4.use publishable key and use stripe to get card information and error
server side : 
    1.install stripe in the server side
    2.create payment intent pos api and return client secret
    3.make sure you use card payment method types : ['card']
client side :
    1.get client secret from server side
    2.use confirm card payment and pass user info and card and client secret
    8.finally display transaction id, success message and others        
*/