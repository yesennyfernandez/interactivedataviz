const width = window.innerWidth * 0.8,
  height = window.innerHeight * 0.8,
  margin = {top: 10, bottom: 30, left: 40, right: 10},
  radius = 6;


let svg;
let xScale;
let yScale;
let colorScale;


let Precinct = {
  data: [],
  selectedPrecinct: "All"
};


d3.csv("../data/DV_Complaint_2021.csv", d3.autoType).then(raw_data => {
    console.log("data", raw_data);
    Precinct.data = raw_data;
    init();
  }
);

function init() {


  xScale = d3.scaleLinear()
    .domain(d3.extent(Precinct.data, d => d.RapeComplaints))
    .range([margin.left, width-margin.right])

  yScale = d3.scaleLinear()
    .domain(d3.extent(Precinct.data, d => d.MurderComplaints))
    .range([height-margin.bottom,margin.top])

  colorScale = d3.scaleOrdinal()
    .domain(["Rape Complaints","Murder Complaints"])
    .range(["teal", "purple"])


  const xAxis = d3.axisBottom(xScale)
  const yAxis = d3.axisLeft(yScale)

  
    const dropdown = d3.select("#dropdown")

    dropdown.selectAll("option")
      .data(["All","Rape Complaints","Murder Complaints"])
      .join("option")
      .attr("value", d => d)
      .text(d=>d)
    
    
    dropdown.on("change", event => {
      console.log(event.target.value)
      Precinct.selectedPrecinct = event.target.value
      console.log("new Precinct", Precinct)
  
      draw();
    })
 


  svg = d3.select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

  
  const xAxisGroup = svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${0},${height - margin.bottom})`)
    .call(xAxis)

  const yAxisGroup = svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left},${0})`)
    .call(yAxis)

  draw(); // calls the draw function 
}

  const dot = svg
    .selectAll("circle.dot")
    .data(filteredData, d => d.BioID)  // on the filtered data, with unique ID 
    .join(
      enter => enter.append("circle")
      .attr("class", "dot") 
      .attr("r", radius)
      .attr("cx", 0)
      .attr("cy", d => yScale(d.MurderComplaints))
      .attr("fill", "black")
      .call(enter => enter
        .transition()
        .duration(1000)
        .attr("cx", d => xScale(d.RapeComplaints))
        .attr("fill", d => colorScale(d.MurderComplaints)))
        ,
      update => update,
      exit => exit
      .transition()
      .duration(1000)
      .attr("fill", "gray")
      .attr("r", (radius * 0.25))
      .delay(250)
      .attr("cx", 0)
      .remove()
  )
