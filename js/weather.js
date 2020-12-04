function gettingJSON(){
    //Display the forecast
    // Your code here.


    //http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ff50bde9df369a377f0b0ff4e5987cd4


    //Set default location if one isn't provided
    let location;
    location = "Ann Arbor";

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
    query = "api.openweathermap.org/data/2.5/weather?q=Ann Arbor&units=imperial&appid=ff50bde9df369a377f0b0ff4e5987cd4";
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.
    loc = document.querySelector("#loc").value;
    console.log(loc);
    temp = document.querySelector("#temp").value;
    tempImg = document.querySelector("#tempImg").value;


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

    });
}
