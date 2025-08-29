### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
# Answer: 
### Difference between getElementById, getElementsByClassName:
* getElementById selects only the first element that is found on the HTMl document. If there is any other elements come after the first element with same ID, the query will not select them and ignore them; Instead getElementsByClassName returns all the elements those contain the class name mentioned in the paramater. 

* getElementById returns a single element; instead getElementsByClassName returns a HTML live collection most likely an array. 

* getElementById is a method to return or query an element by given "id" string without any symbol; instead getElementsByClassName is a method to return or query all the elements by given "class" string without any symbol. 

*  If no element is found, the getElementById method returns: null; instead in getElementsByClassName, If no elements are found, it returns an empty HTMLCollection like an empty array.

### Difference between querySelector, querySelectorAll:

* querySelector is a method to query the first single element matches with given CSS selector; Instead querySelectorAll returns all the elements match with the given CSS selector- in a static node list.

* In querySelector method, if no element found with the given selector it will return null; Instead  querySelectorAll in this case will return a empty nodelist like an empty array.


### Difference between getElementById, getElementsByClassName and querySelector / querySelectorAll:

* getElementById, getElementsByClassName these method's paramater indicates to a strict and specific type of CSS selector. So adding arguments in the method's paramater, the string should be with no extra symbol. So getElementById will accept only "id" with no # symbol and getElementsByClassName will accept only "className" no . symbol; Instead querySelector / querySelectorAll- these methods accept any CSS selector, and these not indicate to a specific type of html attribute value or CSS selector. That means the full CSS selector should be added in the paramater as same as CSS selectors written in the css style. So any symbol of specific slector type should be and can be added in the paramater. 

* getElementsByClassName returns a live HTML collection like array, updating the html collection with the same same given class, or deleting any of them or adding new item will also update the array like collection; Instead querySelectorAll returns a array like static nodelist. So updating , deleting or adding new elements or nodes in the list will not update the node list. The nodelist will only query the nodes when this function called first time. 

* The array like HTML collection getElementsByClassName returns it is iterable similarly as array, but the all iteration methods of array are not supported in this method, because .forEach() this method can't be use to iterate getElementsByClassName method's returned collection; Instead querySelectorAll supports the .forEach() iteration method and also can be iterated as similar as an array. 

### 2. How do you create and insert a new element into the DOM?

### Answer: 
* To create a new element I will use this method: document.createElement("tagName")

* After creating an element the element is not visible to the document visitors and diconnected from the DOM tree, for that we will have to append it in any of the DOM element's chain. For this I will use: parentNode.appendChild(newNode)  --- The parentNode is the variable name of the element that I queried to put the new element under that. And the newNode is the variable name of our current new node that we are appending to the DOM tree. 

### 3. What is Event Bubbling and how does it work?

### Answer: 

* Event bubbling is a fundamental concept in JavaScript that describes how events propagate through the DOM tree.

### How it works: 

* Event Bubbling is a phase in the event propagation model where an event starts from the most specific target element (the one that was triggered, for example the one that is clicked in the click event) and then "bubbles up" or propagates outward through its ancestor elements in the DOM hierarchy, all the way up to the window object.

* For example, basically the event firstly propagates the DOM tree from top to bottom: window -> document -> <html> -> <body> -> ... -> target
After it reaches to the target element, it goes from this element to the top ansector again one by one: target -> ... -> <body> -> <html> -> document -> window -- This upward propagation. This one what we call by Event Bubbling. So this means if the target elements parent and grandparent also has any event. Then the target element then the parent and then the grandparent all will be triggered in Event bubble. 


### 4. What is Event Delegation in JavaScript? Why is it useful?

# Answer: 

* Event Delegation is the practice of attaching a single event listener to a parent element to handle events that are triggered on its child elements. Instead of adding listeners to each individual child, we let the events from the children "bubble up" to a common parent and handle them there.

# Why is it useful: 

* We can prevent the bubble up in useful cases by adding the event listener in it's parent.

* Inside the listener, we can check the event.target property to see which specific child element originally triggered the event.

* Then, we can take the appropriate action based on which child was clicked.

* Attaching a single event listener instead of hundreds or thousands in every single child element. This consumes far less memory and is much easier on the browser, especially for large applications.

*  Don't need to manually add and remove event listeners every time we add or delete elements from the DOM. Any child element added in the future will automatically trigger the event on the parent when clicked. This is its biggest advantage.

* Simplifies Code and Memory Management. There's less code to write and maintain. 


### 5. What is the difference between preventDefault() and stopPropagation() methods?

# Ans: 

* preventDefault() cancels the browser's default behavior for the event (e.g., anchor link, form submission). --- Event propagation:	Continues (bubbles/captures normally).
* stopPropagation()	Stops the event from moving up (bubbling) or down (capturing) the DOM tree.	Default behavior for the event still occurs. Event propagation: Stopped. Other elements that are target element's parent or child won't hear the event. That means the event will not propagate it from top to bottom or bottom to top of the DOM tree. 