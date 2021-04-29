# <span style="color:yellow;text-shadow:3px 3px rgba(46, 49, 49, .7);"><center>RG2G -Rebels Guide to the Galaxy</center></span>
<right>![icon](https://raw.githubusercontent.com/squirrellypenguin/projectapp/main/geonosis_by_radiusss.png)</right>


## Project Links

- [REPO](https://github.com/squirrellypenguin/projectapp)
- [LIVE](https://objective-kowalevski-4e733f.netlify.app/)

## Project Description

Will use the Star Wars API to create guide or the SW universe.  Final goal is to create a pusedo card battle game with a counter for recording wins and loses; perhaps remove losing toon from array. 

## API

[SWAPI](https://swapi.dev/api/people/)

```
{
	"count": 82,
	"next": "http://swapi.dev/api/people/?page=2",
	"previous": null,
	"results": [
		{
			"name": "Luke Skywalker",
			"height": "172",
			"mass": "77",
			"hair_color": "blond",
			"skin_color": "fair",
			"eye_color": "blue",
			"birth_year": "19BBY",
			"gender": "male",
			"homeworld": "http://swapi.dev/api/planets/1/",
			"films": [
				"http://swapi.dev/api/films/1/",
				"http://swapi.dev/api/films/2/",
				"http://swapi.dev/api/films/3/",
				"http://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [
				"http://swapi.dev/api/vehicles/14/",
				"http://swapi.dev/api/vehicles/30/"
			],
			"starships": [
				"http://swapi.dev/api/starships/12/",
				"http://swapi.dev/api/starships/22/"
			],
			"created": "2014-12-09T13:50:51.644000Z",
			"edited": "2014-12-20T21:17:56.891000Z",
			"url": "http://swapi.dev/api/people/1/"
		}
	]
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile First Figma](https://www.figma.com/file/GcMtI3P0fA4tpQdW9WNKat/Untitled?node-id=0%3A1)
- [React Design](#Components)


### MVP/PostMVP

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Craft battle logic
- Counter for rounds won
- Remove defeated player


#### PostMVP EXAMPLE

- Add localStorage storage for persons


## Components

**App**
```
+-- Header
|   +-- Nav
+-- Main
|   +-- People
|       +-- Person
|   +-- Transports
|       +-- Transport
|   +-- Planets
|       +-- Planet
|   +-- Battle && counter
+-- Footer
```
____________________________________________________________________________
| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the footer | 
| Main	|  Provide  route to sub sections|
|Transports/Transport| Subsection overview with detail component |
|Planets/Planet|  Subsection overview with detail component |
|People|Person|  Subsection overview with detail component |
|Battle| Draws in the selected people and fight one another with simple logic and sets counter |
|Counter| counts|

_________________________________________________________________________________________________________
| Build Step | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Assemble data | H | 10 hrs | TBD hrs |
|Build out framework | H | 10hrs |TBD hrs|
| Render data | M | 10hrs| TBD hrs |
|Less ugly| L | 5 hrs |TBD hrs |
| Total |   | 35hrs| TBD hrs |

## Additional Libraries



## Code Snippet

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
