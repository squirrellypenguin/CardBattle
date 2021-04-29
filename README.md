# Project Overview

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
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

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

Nav
   Main
	People
	  	Person
	Transports
		Transport
	Planets	
		Planet
	Battle 
		Person



##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Main	| 
|Transports/Transport|
|Planets/Planet|
|Battle/Person| Draws in the selected people and fight one another with simple logic and stores counter
|Counter| Stores the fight total


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Assemble data | H | 10 hrs | TBD hrs |
|Build out framework | H | 10hrs |TBD hrs|
| Render data | H | 10hrs| TBD hrs |
|Less ugly| H | 5 hrs |TBD hrs |
| Total | H | 35hrs| TBD hrs |

## Additional Libraries



## Code Snippet

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
