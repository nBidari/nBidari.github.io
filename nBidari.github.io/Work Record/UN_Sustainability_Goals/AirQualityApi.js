/*AIR QUALITY WIDGET

	*First Setup*

	(function(w,d,t,f){  w[f]=w[f]||function(c,k,n){s=w[f],k=s['k']=(s['k']||(k?('&k='+k):''));s['c']=  
    c=(c  instanceof  Array)?c:[c];s['n']=n=n||0;L=d.createElement(t),e=d.getElementsByTagName(t)[0];  
    L.async=1;L.src='//feed.aqicn.org/feed/'+(c[n].city)+'/'+(c[n].lang||'')+'/feed.v1.js?n='+n+k;  
    e.parentNode.insertBefore(L,e);  };  })(  window,document,'script','_aqiFeed'  ); 
	

	*To Include Widget*
	_aqiFeed({  container:"city-aqi-container",  city:"beijing"  });

	Container is the id that the widget is put in.

	*lang option*
	lang:"cn"

	The currently supported languages are Chinese simplifed "cn", 
	Chinese traditonal "hk", Japanese "jp", Korean "kr", Russia "ru",
	Spanish "es", French "fr" and Polish "pl". If not specified or
	set to null, English is used.

	*display format*

	display:"%cityname  AQI  is  %aqi<br><small>on  %date</small>",

	%cityname is the name of the city
	%aqi for decorated AQI value
	%aqiv for undecorated AQI value
	%style for the style of the widget

*/

// AIR QUALITY WIDGET
var chosenLang, chosenCity;
var cityValues = ['brisbane', 'melbourne', 'sydney', 'vienna', 'calgary', 'toronto', 'montreal','baoding', 'beijing', 'changchun', 'changsha', 'chengdu', 'dongguan', 'guangzhou', 'hangzhou', 'hongkong', 'shanghai', 'shenzhen','prague', 'cairo', 'giza', 'paris', 'berlin', 'newdelhi', 'jakarta', 'isfahan', 'tehran', 'milan', 'rome', 'hiroshima', 'kyoto', 'tokyo', 'yokohama', 'busan', 'seoul','moscow', 'barcelona', 'madrid', 'london', 'chigaco', 'philadelphia']
var cityText = titleMaker(cityValues);
var langDropdown = document.getElementById("languageDropdown");
var cityDropdown = document.getElementById("airQualityDropdown");

langDropdown.addEventListener("change", function() {
	chosenLang = langDropdown.value;
	aqiChange(chosenLang, chosenCity);
});

cityDropdown.addEventListener("change", function() {
	chosenCity = cityDropdown.value;
	aqiChange(chosenLang, chosenCity);

	console.log(cityDropdown.value)
});

window.onload = function() {
	for (var i = 0; i<cityValues.length; i++) {
		var option = document.createElement('option');
		option.text = cityText[i];
		option.value = cityValues[i];
		cityDropdown.add(option, 0);
	}
}


function aqiChange(language, chosenCity) {
	_aqiFeed({
		display: '%details',
		container:"airQualityApi",
		lang: language,
		city: chosenCity
		// callback:function(aqi) {
		// 	console.log(aqi);
		// 	}
	});
}

//Base Code
(function(w,d,t,f){  w[f]=w[f]||function(c,k,n){s=w[f],k=s['k']=(s['k']||(k?('&k='+k):''));s['c']=  
c=(c  instanceof  Array)?c:[c];s['n']=n=n||0;L=d.createElement(t),e=d.getElementsByTagName(t)[0];  
L.async=1;L.src='//feed.aqicn.org/feed/'+(c[n].city)+'/'+(c[n].lang||'')+'/feed.v1.js?n='+n+k;  
e.parentNode.insertBefore(L,e);  };  })(  window,document,'script','_aqiFeed'  );

//Calling object
// _aqiFeed({    
// 	display:"%details",
// 	container:"airQualityApi",
// 	city: chosenCityName,
// 	callback:function(aqi) {
// 		console.log(aqi);
// 	}
// });

