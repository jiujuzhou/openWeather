# Weather-Journal App Project

# Here is what u need to make this project work:
1, install node.js & the dependencies in package.json file.    
2, run node server.js to enable server.    
3, then make sure using page: http://localhost:8000/ to view ur main web page.    
4, type ur zip code & feelings in the main page. click generate button. Then u will see result.    


# inplementation
1, create 2 routes in server.js, post & get. Use projectData obj as local storage for server.     
2, go to openweathermap to apply for API Key.    
3, using this API key to get temprature info.     
4, post temp+ data+feeling to server by using "/post", save it to projectData.    
5, retrieve what saved in projectData back by using "/get" and update UI accordingly.     
