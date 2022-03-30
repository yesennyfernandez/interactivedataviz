/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.9,
height = window.innerHeight * 0.7,
margin = {top: 20, bottom: 35, left: 30, right: 10};

/**
* APPLICATION STATE
* */

let state = {
  data:null
};

/**
* LOAD DATA
* */
d3.json("../data/flare.json", d3.autotype).then(data => {
  state.data = data;
  init();
});

/**
* INITIALIZING FUNCTION
* this will be run *one time* when the data finishes loading in
* */
function init() {

const container = d3.select("#container")
.style("position","relative");

svg= container
.append("svg")
.attr("width", width)
.attr("height", height)

const root = d3.hierarchy(state.data)
.sum(d => d.value)
.sort((a,b) => b.value - a.value);
console.log(root)

const treeLayout = d3.treemap()
.size([
  width - margin.left - margin.right,
  height - margin.top - margin.bottom])
.paddingInner(2)

const tree = treeLayout(root)
const leaves = tree.leaves() //that "leaves" in tree.leaves is a function that actually goes there.

const leafGroups = svg
selectAll("g")
      .data(leaves)
      .join("g")

  draw(); // calls the draw function
}

/**
* DRAW FUNCTION
* we call this every time there is an update to the data/state
* */
function draw() {
  
}