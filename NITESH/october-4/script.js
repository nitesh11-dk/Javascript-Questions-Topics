//  what is application of closures 

// * Explain event bubbling or event propagation in JavaScript.

// !  to stop this   -->  e.stopPropagation();

//!   What is event capturing or  trickling in JavaScript?
document.getElementById('parent').addEventListener('click', () => {
  console.log("Parent clicked");
},true);



document.getElementById('child').addEventListener('click', () => {
  console.log("Child clicked");
},true);


document.getElementById('superChild').addEventListener('click', (e) => {
    // e.stopPropagation();
  console.log("Superchild  clicked");
});





















// * Default (bubbling): Child event runs first, then parent.
// * Capturing mode (with true): Parent event runs first, then child.






