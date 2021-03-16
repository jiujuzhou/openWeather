# Weather-Journal App Project

# Descritption
a homework project for udacity frontend nanodegree.    
This is an wather APP, which could get the temprature & data by accessing https://openweathermap.org/

# Prerequsite
"node.js"     
"body-parser": "1.19.0"    
"cors": "2.8.5"    
"express": "4.17.1"       

# Run
1, install node.js, then use npm to install body-parser, cors, express.   
2, run cmd "node server.js", to enable server.    
3, then make sure using page: http://localhost:8000/ to view ur main web page.    
4, type ur zip code & feelings in the main page. click generate button. Then u will see result.    


# inplementation overview
1, create 2 routes in server.js, post & get. Use projectData obj as local storage for server.     
2, go to openweathermap to apply for API Key.    
3, using this API key to get temprature info.     
4, post temp+ data+feeling to server by using "/post", save it to projectData.    
5, retrieve what saved in projectData back by using "/get" and update UI dynamically accordingly.     

# running screenshot
![img](https://github.com/jiujuzhou/openWeather/blob/main/app_ui.JPG)
![img](https://github.com/jiujuzhou/openWeather/blob/main/server.JPG)
