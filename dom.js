// document.querySelector('main')
// document.getElementById('id')	
// document.getElementsByTagName('tage')	
// document.getElementsByClassName('class')	

// // Property	Description

// element.innerHTML =  new html content	
// element.attribute = new value	        
// element.style.property = new style	    

// // Method	Description

// element.setAttribute(attribute, value)	



// document.createElement(element)
// 	// Create an HTML element
// document.removeChild(element)
// 	// Remove an HTML element
// document.appendChild(element)
// 	Add an HTML element
// document.replaceChild(new, old)
// 	// Replace an HTML element
// document.write(text)
const element = document.getElementById("id");
const data = document.querySelector('h1');
const dom=document.getElementById('id');
element.style.color = "red";
element.style.fontSize = "25px";
element.style.textTransform = "uppercase";
element.innerHTML = "i am changed by dom";
data.innerHTML = "i am changed by dom function";
dom.innerHTML = "i am changed by dom function";
console.log(dom);
