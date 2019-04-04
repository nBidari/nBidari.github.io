// window.onload = init;

// var sidebar;
// var isOnSidebar = false;

// /*This part is so that the sidebar stays visible for a little bit before
// shading back off.*/
// function init() {
// 	sidebar = document.getElementById("sidebar");
// 	sidebar.style.opacity = "0.7";

// 	// console.log(sidebar)

// 	sidebar.addEventListener("mouseenter", function() {
// 		isOnSidebar=true;
// 		sidebar.style.opacity = "1";
// 	});
// 	sidebar.addEventListener("mouseout", function() {
// 		isOnSidebar=false;
// 		setTimeout(checkInDiv, 3000);
// 	});

// }

// function checkInDiv() {
// 	if (!isOnSidebar) {
// 		sidebar.style.opacity = "0.2";
// 	}
// }

// AIR QUALITY WIDGET

//Base Code
(function(w,d,t,f){  w[f]=w[f]||function(c,k,n){s=w[f],k=s['k']=(s['k']||(k?('&k='+k):''));s['c']=  
c=(c  instanceof  Array)?c:[c];s['n']=n=n||0;L=d.createElement(t),e=d.getElementsByTagName(t)[0];  
L.async=1;L.src='//feed.aqicn.org/feed/'+(c[n].city)+'/'+(c[n].lang||'')+'/feed.v1.js?n='+n+k;  
e.parentNode.insertBefore(L,e);  };  })(  window,document,'script','_aqiFeed'  );

//Calling object
_aqiFeed({    
  display:"%details",  
  container:"airQualityApi",    
  city:"beijing"  
});  



var footer;
showActivity(1);

window.onload = function() {
	footer = document.getElementById("footer")
	footer.style.webkitAnimationPlayState = "running";
};

function turnOffAnimation() {
	footer.style.webkitAnimationPlayState = "paused";
}


/*Activity Bar*/
function showActivity(n) {
	let x = document.getElementsByClassName("activity");
	if (n == 0) {
		x[0].style.display = 'none';
		x[1].style.display = 'block';
	}else {
		x[1].style.display = 'none';
		x[0].style.display = 'block';
	}
}