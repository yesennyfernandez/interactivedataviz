/* CONSTANTS AND GLOBALS */
const width = window.innerWidth *.8 ;
const height = 500;

/* LOAD DATA */
var svg = d3.select("#container")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


d3.csv('../data/squirrelActivities.csv', d3.autoType)
  .then(data => {
    console.log("data", data)

    /* SCALES */
    // xscale - categorical, activity
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d=> d.count)])   //data.map(d=> d.activity))
      .range([0, width]); //visual variable
      //.ticks(14);
    
    svg.append("g")
      .attr("transform", "translate(0, " + height + ")")
      .call(d3.axisBottom(xScale).ticks(14))
      .selectAll("text")
      .attr("transform", "translate(0,0)rotate(-45)")
      .style("text-anchor", "end");

    //yscale - linear, count
    const yScale = d3.scaleBand()
      .domain(data.map(d=> d.activity))
      .range([0, height])
      .paddingInner(0.1);

    svg.append("g")
      .call(d3.axisLeft(yScale))
    

    svg.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", xScale(0))
      .attr("y", function(d) { return yScale(d.activity); })
      .attr("width", function(d) { return xScale(d.count); }) //)
      .attr("height",  yScale.bandwidth() ) // d=> height - yScale(d.count))
      .attr("fill", "#69b3a2")
      //.attr("x", d=>xScale(d.activity))
      //.attr("y", d=>yScale(d.count))
    /** Select your container and append the visual elements to it */

  })