  /* CONSTANTS AND GLOBALS */

  const width = window.innerWidth * 0.5;
  const height = window.innerHeight * 0.7;
  const margin = {top: 40, bottom: 80, left: 80, right: 120};

/* LOAD DATA */
  svg = d3.select("#barchart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv('../data/squirrelActivities.csv', d3.autoType)
  .then(data => {
  console.log("data", data)

    /* xSCALES */
    const myXScale = d3.scaleLinear()
      .domain([0, d3.max(data, d=> d.count)])
      .range([0, width]);
    
    svg.append("g")
      .attr("transform", "translate(0, " + height + ")")
      .call(d3.axisBottom(myXScale).ticks(14))
      .selectAll("text")
      .attr("transform", "translate(0,0)rotate(-45)")
      .style("text-anchor", "end");

    //yScale 
    const myYScale = d3.scaleBand()
      .domain(data.map(d=> d.activity))
      .range([0, height])
      .paddingInner(0.1);

    svg.append("g")
      .call(d3.axisLeft(myYScale))

    svg.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", myXScale(0))
      .attr("y", function(d) { return myYScale(d.activity); })
      .attr("width", function(d) { return myXScale(d.count); })
      .attr("height",  myYScale.bandwidth() )
      .attr("fill", "#000080")
  })