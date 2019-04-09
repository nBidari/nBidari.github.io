var myData = "";
    var staticUrl = 'https://raw.githubusercontent.com/nBidari/nBidari.github.io/master/Work%20Record/Activity%202/data/data.json';

    var entry = document.getElementById("maxdisplay");
    var displayContent = document.getElementById("content"); 

    console.log(entry)
    console.log(displayContent)

    function generateDisplay() {
        console.log("GENERATE DISPLAY CALLED")

        while (displayContent.getElementsByTagName("div").length > 0) {
            displayContent.removeChild(displayContent.childNodes[0])
        }

        $.getJSON(staticUrl, function(data) {
            
            console.log(data)

        	iw = window.innerWidth - 100;
            
            vstr = data.fact[1].Value;
            largest = parseInt(vstr.substring(0,vstr.indexOf("[")).replace(" ",""));


            for (i = 0; i < 194; i++) {

                vstr = data.fact[i].Value;
                cval = parseInt(vstr.substring(0,vstr.indexOf("[")).replace(" ",""));
                if (isNaN(cval) === false && cval < entry.value) {
                    largest = Math.max(largest,cval)
                }
                    
                
            
            }

            for (i = 0; i < 194; i++) {

                col = ["red","green","blue"];
                
                vstr = data.fact[i].Value;
                cval = parseInt(vstr.substring(0,vstr.indexOf("[")).replace(" ",""));
                
                if (isNaN(cval) === false && cval < entry.value) {
              
                    var div = document.createElement("div");
                    div.setAttribute("id","div"+i);
                
                    val1 = parseInt(cval/largest*iw);

                    document.getElementById("content").appendChild(div);                
                

                    document.getElementById("div"+i).style.width = val1+"px";
                    document.getElementById("div"+i).style.backgroundColor = col[i%3];
                                
                    var p = document.createElement("p");
                    p.setAttribute("id","p"+i);
                    tcountry = String(data.fact[i].dims.COUNTRY);


                    document.getElementById("div"+i).appendChild(p);
                    document.getElementById("p"+i).innerHTML = "<pre>"+tcountry+" - "+cval+"</pre>";    
                    
                }
           
            }
        });

    }

    maxdisplay.addEventListener("change", generateDisplay);