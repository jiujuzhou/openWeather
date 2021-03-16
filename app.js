/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let curDay = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();
//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a1bcd489d2a560a1a93be3267f82d099
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',us&units=metric&appid=a1bcd489d2a560a1a93be3267f82d099';


//get the weather from the weather website. and post it on my website running on local server. 
function doWeather(e) {
  e.preventDefault();
  const zip_input = document.getElementById('zip').value;
  const feeling_input = document.getElementById('feelings').value;

  getData(baseURL, zip_input, apiKey)   //get Data from openweathermap.org
    .then(function (fromAPI) {
      const my_post = {   //this is what I'm going to post
      date: curDay, 
      //temp:  Math.round((fromAPI.main.temp - 273.15)*10)/10,  //from Kelven to ℃, round to 1 decimal.
      temp: fromAPI.main.temp,
      content: feeling_input
    }
      postData('/post', my_post)   //post data to our local server
    })
    .then(function (fromServer) {
      updateUI()   //retrieve data from local server & update UI to show results
    })
}

//get data from the website
const getData = async (baseURL, newZip, apiKey) => {
  // res equals to the result of fetch function
  const res = await fetch(baseURL + newZip + apiKey);
  try {
    const userData = await res.json();
    return userData;
  } catch (error) {
    console.error("error", error);
  }
}

//post data to local server
const postData = async (url = '', data = {}) => {
  console.log("doing post",data);
  const req = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify({
      date: data.date,
      temp: data.temp,
      content: data.content
    })
  })

  try {
    const newData = await req.json();
    return newData;
  }
  catch (error) {
    console.error(error);
  }
};


//get what the local have and update data.
const updateUI = async () => {
	const request = await fetch("/get");
	try {
		const data = await request.json();
		console.log("Doing updateUI: ", data);
		document.getElementById("date").innerHTML = `Date: ${data.date}`;
		document.getElementById("temp").innerHTML = `Temperature(°C): ${data.temp}`;
		document.getElementById("content").innerHTML = `Feelings: ${data.content}`;
	} catch (error) {
		console.error("error", error);
	}
};

//add event for generate button
document.getElementById('generate').addEventListener('click', doWeather,false);

