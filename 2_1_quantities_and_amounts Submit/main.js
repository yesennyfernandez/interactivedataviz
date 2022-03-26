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
  const myXScale = d3.scaleBand()
    .domain(["running", "chasing", "climbing", "eating", "foraging"])
    .range([0, 500]) // visual variable

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

  mySvg.selectAll("rect")
  .data(myData)
  .join("rect")
  .attr("width", myXScale.bandwidth())
  .attr("height", d=> 1500 - yScale(d.count))
  .attr("x", d=> myXScale(d.activity))
  .attr("y", d=> myYScale(d.count))
