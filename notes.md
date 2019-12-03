## Routing Notes

We write code for humans, optimize readability
A developer I'd like to have on my team

## Terminology

Seperation of Conerns - "Who should be doing this?"

## Routing

--use it to break up an application/api into sub applications
-picking the code to execute based on the URL and HTTP Method
-used for managing sub resources (comments on a blog post)

Error `server.listen is not a function`, check that the server is exported correctly

## Query String Parameters 

The client can send data to the server inside:
-body
-URL params
-query string params(part of the URL)
-? (headers)

https://www.google.com
/search--->path (routing handles that)
?----------> marks the beginning of the query string params
source=hp ----> key/value
&--------------> seperates key/values
ei=3auiahfoandgf=rubber+ducking&oq=rubber+ducking

Translates to an object (Express does it)
