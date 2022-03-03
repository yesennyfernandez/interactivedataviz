/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.7,
height = window.innerHeight * 0.7;
margin - 50;

/* LOAD DATA */
d3.json("[PATH_TO_YOUR_DATA]", d3.autoType)
  .then(data => {
    console.log(data)

    /* SCALES */
    const xScale = d3.scaleLinear ()
    .domain([0,d3.max(data, d => d.envScore2020)])
    .range([0,width-margin])

    const yScale = d3.scaleLinear()
    .domain([0,d3.max(data, d => d.ideologyScore2020)])
    .range[([height-margin, margin])

    const colorScale = d3.scaleOrdinal()
    .domain(["R", "D", "I"])
    .range(["red", "blue", "purple"])
    
    /* HTML ELEMENTS */
    const svg = d3.select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    svg.append("g")
    .attr("transform", 'translate(0,${height-margin})')
    .call(xAxis)

    svg.append("g")
    .attr("transform","translate(0,0")
    .call(yAxis)


    /* JOIN - SELECT-DATA-JOIN & DRAW */
    svg.selectAll("circle")
    .data(data)
    .join('circle')
    .attr("cx", d => xScale(d.envScore2020))
    .attr("cy", d => yScale(d.ideologyScore2020))
    .attr("r", 3)
    .attr("fill", d=> colorScale(d.Party))

  });
