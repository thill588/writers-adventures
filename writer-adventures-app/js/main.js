//Create an app that imitates Writer's Adventures the user will receive a random line to write poetry, as well as the whole poem.

//create a button that autogenerates a line 
document.querySelector("button").addEventListener('click',pickALine)

function pickALine(){
const url = `https://poetrydb.org/random`

fetch (url)
.then (res => res.json())
.then (data => {
  console.log(data)
  document.querySelector("h4").innerText = data[0].title
  document.querySelector("h5").innerText = data[0].author
  document.querySelector("h3").innerText = data[0].lines
  let linesLength =data[0].lines.length
 
  let randomNum = Math.floor(Math.random()*25);
 

  console.log(randomNum)
  
if(linesLength>=randomNum)
document.querySelector("h2").innerText = data[0].lines[`${randomNum}`]
else{
  document.querySelector("h2").innerText = `"Choose your favorite line"`
}

})

.catch (err => {
  console.log(`error ${err}`)
})
}