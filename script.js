let f;
const weatherData = {
tempUnit: 'C',
windSpeedUnit: 'm/s',
days: [
{ day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10 , type:'Sunny' },
{ day: 'Tue', temp: 14, windDirection: 'north-east', windSpeed: 14, type: 'Rainy' },
{ day: 'Wed', temp: 17, windDirection: 'west', windSpeed: 20, type: 'Cloudy' },
{ day: 'Thu', temp: 20, windDirection: 'south', windSpeed: 10, type: 'Cloudy' },
{ day: 'Fri', temp: 15, windDirection: 'west', windSpeed: 14, type: 'Cloudy' },
{ day: 'Sat', temp: 22, windDirection: 'south', windSpeed: 10, type: 'Sunny' },
{ day: 'Sun', temp: 25, windDirection: 'south', windSpeed: 10, type: 'Sunny' },
]
}

class weather {

  constructor(tempUnit, windSpeedUnit,days){
    this.tempUnit = tempUnit;
    this.windSpeedUnit = windSpeedUnit;
    this.days = days;
    this.list = [];
  }
  ListOfDays(){

    for(var i = 0; i <this.days.length; i++){
     this.list.push(this.days[i]);
    }

  }
  changeTemp(k){
    let ul = document.getElementById('list');
    list.innerHTML = '';
    let display1 = document.getElementById('display');
    display1.innerHTML = '';
    let b = document.getElementById('temp');


    if(this.tempUnit == 'C'){
        this.list.forEach(function(e){
          k = e.temp + 273.15;
          e.temp = k;
          console.log(e.temp);
        });
        this.tempUnit = 'K';
        b.innerHTML = "C";
    }

    else if(this.tempUnit == 'K'){
        this.list.forEach(function(e){
          k = e.temp - 273.15;
          e.temp = k;
          console.log(e.temp);
        });
        this.tempUnit = 'C';
        b.innerHTML = "K"
      }
    display(f);
  }
  changeSpeed(){
    let ul = document.getElementById('list');

    ul.innerHTML = '';
    let display1 = document.getElementById('display');
    display1.innerHTML = '';
    let b = document.getElementById('speed');
    let k = 0;
    if(this.windSpeedUnit == 'm/s'){
        this.list.forEach(function(e){
          k = e.windSpeed * 3.6;
          e.windSpeed = k;
          console.log(e.windSpeed)
        });
        this.windSpeedUnit = 'k/s';
        b.innerHTML = "m/s";
    }

    else if(this.windSpeedUnit == 'k/s'){
        this.list.forEach(function(e){
          k = parseInt(0.277778 * e.windSpeed);
          e.windSpeed = k;

        });
        this.windSpeedUnit= 'm/s';
        b.innerHTML = "km/h";
      }
    display(f);
  }


};

f = new weather(weatherData.tempUnit, weatherData.windSpeedUnit, weatherData.days);
f.ListOfDays();
display(f);
let k =0;

function display(f){
  let step = '';
  if (f.tempUnit == 'C'){
    step = "&#8451;";
  }
  else {
    step = "&#8490;";
  }

  f.list.forEach(function(currentDay){

    let ul = document.getElementById('list');
    let li = document.createElement('li');
    let icon = '';
    if(currentDay.type == 'Sunny'){
      icon = "&#9728;"
    } else if(currentDay.type == 'Cloudy'){
      icon = "&#9729;"
    } else if (currentDay.type == 'Rainy'){
      icon = "&#9928;"
    }


    li.innerHTML = currentDay.day + "</br> " + currentDay.temp  + step + "</br>" ;
    ul.appendChild(li);



    li.addEventListener('click', function(){
      let d = document.getElementById('display');
      let p = document.createElement('p');
      let h1 = document.createElement('h1');
      let img = document.createElement('img');
      let img1 = document.createElement('img');
      let img2 = document.createElement('img');
      let sun = document.createElement('img');
      p.style.fontSize = '24px';
      img.src = 'images/northeast.png';
      img1.src = 'images/west.png';
      img2.src = 'images/south.png';
      let speed = "";
      if (f.windSpeedUnit == 'm/s'){
        speed = "m/s";
      }
      else {
        speed = "km/h";
      }

      switch(currentDay.day) {
          case "Mon":
          h1.innerHTML = "Monday";
          p.innerHTML =   currentDay.temp + step + "</br>" + icon + "</br>" + currentDay.type  + "</br>" + "Wind speed: " + currentDay.windSpeed + speed + "</br>";
          break;
          case "Tue":
          h1.innerHTML = "Tuesday";
          p.innerHTML =  currentDay.temp + step + "</br>" + icon + "</br>" + currentDay.type  + "</br>" + "Wind speed: " + currentDay.windSpeed + speed  + "</br>";
          break;
          case "Wed":
          h1.innerHTML = "Wednesday";
          p.innerHTML =  currentDay.temp + step + "</br>" + icon + "</br>" + currentDay.type  + "</br>" + "Wind speed: " + currentDay.windSpeed + speed + "</br>" ;
          break;
          case "Thu":
          h1.innerHTML = "Thursday";
          p.innerHTML =   currentDay.temp + step + "</br>" + icon + "</br>" + currentDay.type  + "</br>" + "Wind speed: " + currentDay.windSpeed + speed + "</br>";
          break;
          case "Fri":
          h1.innerHTML = "Friday";
          p.innerHTML =  currentDay.temp + step + "</br>" + icon + "</br>" +  currentDay.type  + "</br>" + "Wind speed: " + currentDay.windSpeed + speed + "</br>";
          break;
          case "Sat":
          h1.innerHTML = "Saturday";
          p.innerHTML =  currentDay.temp + step + "</br>" + icon + "</br>" + currentDay.type  + "</br>" + "Wind speed: " + currentDay.windSpeed + speed + "</br>";
          break;
          case "Sun":
          h1.innerHTML = "Sunday";
          p.innerHTML =  currentDay.temp + step + "</br>" + icon + "</br>" + currentDay.type  + "</br>" + "Wind speed: " + currentDay.windSpeed + speed + "</br>";
          break;
        }
       d.innerHTML = '';
       d.appendChild(h1);
       d.appendChild(p);

       if(currentDay.windDirection == 'north-east'){
        p.appendChild(img);
       }
       else if(currentDay.windDirection == 'west'){
         p.appendChild(img1);
       }
       else if(currentDay.windDirection == 'south'){
         p.appendChild(img2);
       }
    });

  });
}

  var b = document.getElementById('temp');
  b.addEventListener('click', function(){f.changeTemp(k)});

  var d = document.getElementById('speed');
  d.addEventListener('click', function(){f.changeSpeed()});
