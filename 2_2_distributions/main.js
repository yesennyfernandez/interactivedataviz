/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.7,
height = window.innerHeight * 0.7;

/* LOAD DATA */
d3.json("[PATH_TO_YOUR_DATA]", d3.autoType)
  .then(data => {
    console.log(data)

    /* SCALES */
    cons xScale = d3.scaleLinear ()
    .domain([0,d3.max(data, d => d.envScore2020)])
    .range([0,width-margin])

    const yScale = d3.scaleLinear()
    .domain([0,d3.max(data, d => d.ideologyScore2020)])
    .range(height-margin, 0)
    
    /* HTML ELEMENTS */
    const svg = d3.select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

    /* JOIN - SELECT-DATA-JOIN & DRAW */
    svg.selectAll("circle")
    .data(data)
    .join('circle')
    .attr("cx", d => xScale(d.envScore2020))
    .attr("cy", d => yScale(d.ideologyScore2020))
    .attr("r", 3)


  });
