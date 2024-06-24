# Star Wars assignment

## Prep
1. Get data from API
    - get data from here: https://swapi.dev/api/people (data visible in results)
    - Map images from here: https://starwars-visualguide.com/assets/img/characters to the people from array above based on the position in the Array

2. Create Card component based on the schema of a "person"
3. Create a Profile component which will contain more data than the Card component
4. Create the Navbar component that contains the favorites (dropdown)

## Routes/Routing (reactrouter.com => BrowserRouter, Route, useParams) 

1. / - some general buckets with categories of items/people/ ...
2. /details/:id - dynamic route which will map {id} to {index +1} in array of people

### State management / Context (useReducer hook)

1. Data imported on launch = data
2. our reducer [data, dispatch]
3. data = {dataImported, favourites, dataFiltered, searchInputValue}
4. favourites - 2 actions: dispatch ("add") + dispatch("remove")
5. dataFiltered - dispatch("set dataFiltered"), dispatch("clear dataFiltered")
6. searchInputValue dispatch("set input"), dispatch("clear input")