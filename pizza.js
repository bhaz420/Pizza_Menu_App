function getreceipt () {
    // this initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>you ordered:</h3>";
    var runningtotal = 0;
    var sizetotal = 0;
    var sizearray = document.getElementsByClassName ("size");
    for (var i = 0; i < sizearray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedsize = sizeArray[i] .value;
            text1 = text1+selectedsize+"<br>";
        }
    }
    if (slectedsize === "personal pizza") {
        sizetotal = 6;
    } else if (selectedsize === "small pizza") {
        sizetotal = 8;
    } else if (selectedsize === "medium pizza") {
        sizetotal = 10;
    } else if (selectedsize === "large pizza") {
        sizetotal = 14;
    } else if (selectedsize === "extra large pizza") {
        sizetotal = 16;
    }
    runningtotal = sizetotal;
    console.log(selectedsize+" = $"+sizetotal+".00") ;
    console.log("sizetext1: "+text1) ;
    console.log("subtotal: $"+runningtotal+".00") ;
    //these variables will get passed on to each function
    gettopping(runningtotal,text1) ;
 };

 function gettopping(runningtotal,text1) {
    var toppingtotal = 0;
    var selectedtopping = [];
    var toppingArray = document.getElementsByClassName ("toppings");
    for (var j = 0; j <toppingArray.length; j++) {
        if (toppingarray[j].checked) {
            selectedtopping.push(toppingArray[j].value);
            console.log("selectedtoppingitem: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingcount = selectedtopping.length;
    if (toppingcount > 1) {
        toppingtotal = (toppingCount - 1) }
    } else }
        toppingtotal = 0;
    }
    runningtotal = (runningtotal + toppingtotal);
    console.log("total selected topping items: "+toppingcount);
    console.log(toppingcount+" topping - 1 free topping = "+"$"+toppingtotal+".00");
    console.log("topping text1: "+text1);
    console.log("purchase total: "+"$"+runningtotal+".00");
    document.getElementById("showtext").innerHTML = "<h3>total: <strong>$" + runningtotal + ".00" + "</strong></h3>";
};


