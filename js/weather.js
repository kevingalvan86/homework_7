function gettingJSON(){
    //Display the forecast
    // Your code here.


    //http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ff50bde9df369a377f0b0ff4e5987cd4


    //Set default location if one isn't provided
    let location;
    location = "Ann%Arbor";

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    format = "imperial";
    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.  
    query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format + "&appid=ff50bde9df369a377f0b0ff4e5987cd4";
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.
    let loc_input = document.getElementById("location").value;
    if (loc_input != ""){
        location = loc_input;
    }
    var check_radio = document.querySelector('input[name="temp"]:checked');
    if (check_radio != null) {
        format = check_radio.value;
    }
    query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format + "&appid=ff50bde9df369a377f0b0ff4e5987cd4";
    document.getElementById("forecast").style.display = "block"
    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(json.main.temp);
        console.log(json.name);
        document.getElementById("loc").innerText = json.name;
        document.getElementById("temp").innerText = json.main.temp + " with " + json.weather[0].description;
        let url; 
        url = "https://openweathermap.org/img/wn/" + json.weather[0].icon + ".png";
        document.getElementById("tempImg").src = url;
        document.getElementById("tempImg").alt = json.weather[0].description;
    });
}
