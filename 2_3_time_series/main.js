 /* CONSTANTS AND GLOBALS */
const width = window.innerWidght * .7,
height = window.innerHeight * .7,
margih = 30;

/* LOAD DATA */
d3.csv('../data/populationOverTime.csv', d => {
  return {
    year: new Date(+d.Year, 0, 1),
    country: d.Entity,
    population: +d.Population
  }
}).then(data => {
  console.log('data :>> ', data);

  // SCALES

  const xScale = d3.scaleTime()
  .domain(d3.extent(data, d=> d.year))
  .range([margin, wight-margin])

  const yScale = d3.scaleLinear()
  .domain(d3.extent(data, d=> d.population))
  .range([height-margin, margin])

  // CREATE SVG ELEMENT

  const svg = d3.select(#container)
  .append("svg")
  .attr("widht", width)
  .attr("height", height)

  // BUILD AND CALL AXES

  // LINE GENERATOR FUNCTION

  // DRAW LINE

});