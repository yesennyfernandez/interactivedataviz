/* CONSTANTS AND GLOBALS */
const width = window.innerWidth *.8 ;
const height = 500;

/* LOAD DATA */
myData = [
{activity: "running", count: 730},
{activity: "chasing", count: 279},
{activity: "climbing", count: 658},
{activity: "eating", count: 760},
{activity: "foreaging", count: 1435},
]
  /* SCALES */
  // xscale - categorical, activity
  const xScale = d3.scaleBand()
    .domain(["running", "chasing", "climbing", "eating", "foraging"])
    .range([0, 500]) // visual variable

    // yscale - linear,count
  const yScale = d3.scaleLinear()
    .domain([0, 1500])
    .range([1500, 0])

  /* HTML ELEMENTS */
  // svg
  const svg = d3.select("#barchart")
  .append("svg")
  .attr("width", 500)
  .attr("height", 1500)

  //SELECT-DATA JOIN-DRAW - JOIN DATA TO SVG TO GENERATE GRAPHICS

  mySvg.selectAll("rect")
  .data(myData)
  .join("rect")

  // bars
  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("width", xScale.bandwidth())
    .attr("height", d=> height - yScale(d.count))
    .attr("x", d=>xScale(d.activity))
    .attr("y", d=> yScale(d.count))

})