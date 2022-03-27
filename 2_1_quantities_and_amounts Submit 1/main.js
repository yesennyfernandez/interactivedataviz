/* CONSTANTS AND GLOBALS */
const width = window.innerWidth *.8 ;
const height = 500;

/* LOAD DATA */
d3.csv('../data/squirrelActivities.csv', d3.autoType)
.then(data => {
  console.log("data", data)

  /* SCALES */
  // xscale - categorical, activity
 // const xScale = d3.scaleBand()
    //.domain(data.map(d=> d.activity))
   // .range([0, width]) // visual variable
    //.paddingInner(.2)

    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d=> d.count)])   //data.map(d=> d.activity))
      .range([0, width]);

      svg.append("g")
      .attr("transform", "translate(0, " + height + ")")
      .call(d3.axisBottom(xScale).ticks(14))
      .selectAll("text")
      .attr("transform", "translate(0,0)rotate(-45)")
      .style("text-anchor", "end");


    // yscale - linear,count
    const yScale = d3.scaleBand()
    .domain(data.map(d=> d.activity))
    .range([0, height])
    .paddingInner(0.1);
    
    svg.append("g")
      .call(d3.axisLeft(yScale))  
      

  //  const yScale = d3.scaleLinear()
    //.domain([0, d3.max(data, d=> d.count)])
    //.range([height, 0])

  /* HTML ELEMENTS */
  // svg
  const svg = d3.select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

    svg.append("g")
      .call(d3.axisLeft(yScale))

  // bars
  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("width", xScale.bandwidth())
    .attr("height", d=> height - yScale(d.count))
    .attr("x", d=>xScale(d.activity))
    .attr("y", d=> yScale(d.count))
    .attr("fill", "#000080")
})