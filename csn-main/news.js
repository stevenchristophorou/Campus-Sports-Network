// setting up filter
filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  
  for (i = 0; i < x.length; i++) {
    // removing show class from all elements 
    w3RemoveClass(x[i], "show");
    
    // when category matches 
    if (x[i].className.indexOf(c) > -1) {
      w3AddClass(x[i], "show");
    }
  }
}

// helper function to add a class
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// helper function to remove a class 
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// button highlighting when btn active
var btnContainer = document.getElementById("myBtnContainer");
if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      // Find the currently active button
      var current = document.getElementsByClassName("active");
      
      // If an active button exists, remove the 'active' class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      
      // adding 'active' class to selected button 
      this.className += " active";
    });
  }
}
