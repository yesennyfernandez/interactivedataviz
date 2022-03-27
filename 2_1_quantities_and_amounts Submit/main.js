/* CONSTANTS*/
const width = window.innerWidth * .12;
const height = window.innerHeight * .12;

/*DATA */
myData = [
{activity: "running", count: 730},
{activity: "chasing", count: 279},
{activity: "climbing", count: 658},
{activity: "eating", count: 760},
{activity: "foreaging", count: 1435},
]
  /* SCALES */
  // xscale - categorical, activity
  const myXScale = d3.scaleBand()
    .domain(["running", "chasing", "climbing", "eating", "foraging"])
    .range(["blue","yellow","green", "orange", "red"])
    //.range([0, 500]) // visual variable
    //.paddingInner(.1);

    // yscale - linear,count
  const myYScale = d3.scaleLinear()
    .domain([0, 1500])
    .range([1500, 0])

  /* HTML ELEMENTS */
  // svg
  const mySvg = d3.select("#barchart")
  .append("svg")
  .attr("width", 500)
  .attr("height", 1500)

  //SELECT-DATA JOIN-DRAW - JOIN DATA TO SVG TO GENERATE GRAPHICS
//ADD ATTRIBUTES SO GRAPHICS ARE VISIBLE
  mySvg.selectAll("rect")
  .data(myData)
  .join("rect")
  .attr("width", myXScale.bandwidth())
  .attr("height", d=> 1500 - myYScale(d.count))
  .attr("x", d=> myXScale(d.activity))
  .attr("y", d=> myYScale(d.count))

  //.attr("fill", d => colorScale(d.activity))
  //.attr("opacity",.60)