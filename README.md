# Quick Pokedex
This is a quick and simple application that uses the poke api to showcase quick information on Pokemons.
There is a 'More' button that redirects users to the official pokedex application to view further information.

Link to Application : https://quickpokedex.netlify.com/

## Responsive
This application is fully responsive. I enjoyed making my own css structure so the application would be adjusted to any viewport.
Below are some screenshots of the final product.

<img src='img/showcase.png' width='1000px'>

## Bugs and Challenges

#### BUG
One of the biggest bug I faced was the search functionality not working on mobile. It was working on broswer simulation but once I deployed the application and ran it on a real mobile device, the search function would not yield the correct results. This took me a whole day and a half to fix as I went on a crazy search tangent. 
But all I needed to do to fix the bug was add *.toLowerCase()* to my search term as the api used all lowercase for its routes.

#### CHALLENGE
My biggest challenge was passing in input correctly to an api to retrieve images of the pokemon. So I retrieved the Pokemon ID from the poke api which gives you the ID as a integar with no leading 00's. The image api that I used needed the pokemon id with leading 00's. If the searched pokemon ID happened to be above 99, then there were no issues but any ID under 100 would not return the proper result.
I found some solution to this problem onlione but I wanted to find my own solution. So after a few scribbles on my notebook I found a solution that solved my problem completely. It felt very rewarding to have found my own answer to a problem!

## THANK YOU