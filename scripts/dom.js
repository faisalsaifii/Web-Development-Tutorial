// DOM Manipulations
// -------------------------------------------------------------------
console.log("QUERY SELECTOR")
console.log("Returns the first element that matches the CSS selector")
// -------------------------------------------------------------------
console.log("Single")
const heading = document.querySelector('h1')
console.log("Element Selector:\n", heading)
const para = document.querySelector('.para')
console.log("Class Selector:\n", para)
const secondHeading = document.querySelector('h2.heading')
console.log("Element Class Selector:\n", secondHeading)
const bodyHeading = document.querySelector('body > h1')
console.log("Child Selector:\n", bodyHeading)
// -------------------------------------------------------------------
console.log("All")
const allParagraphs = document.querySelectorAll('p')
// Returns Node list hence foreach can be used
console.log("Single Element")
console.log(allParagraphs[0])
console.log("Each Element")
allParagraphs.forEach(p => {
    console.log(p)
})
// -------------------------------------------------------------------
// Single
console.log("Get Element by ID")
const getId = document.getElementById('id')
console.log(getId)
// Multiple
console.log("Get Element by ClassName")
const getClass = document.getElementsByClassName('class')
console.log(getClass)
console.log("Get Element by TagName")
const getTag = document.getElementsByTagName('p')
console.log(getTag)
// Returns an HTML Collection hence foreach can't be used
// Convert into an array to use array functions
// -------------------------------------------------------------------
// Inner Text Property
// Replacing text
heading.innerText = "Inner Text"
// Concatenating Text
heading.innerText += " of H1"
// -------------------------------------------------------------------
// Inner HTML Property
