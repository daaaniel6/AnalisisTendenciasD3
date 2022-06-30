// const draw = async (el) => {

//     const graf = d3.select(el)

// const anchoTotalD = +graf.style("width").slice(0, -2) 
// const altoTotalD = anchoTotalD * 0.5

// const margen = { arriba: 58, derecha: 10, abajo: 95, izquierda: 98 }

// const anchoD = anchoTotalD - margen.izquierda - margen.derecha 
// const altoD = altoTotalD - margen.arriba - margen.abajo


// const svg = graf
// .append("svg") 
// .classed("graf2", true) 
// .attr("width", anchoTotalD) 
// .attr("height", altoTotalD)

// const dataset = await d3.csv("data.csv", d3.autoType)
// }

// draw("#graf2")

//----------------------------------------------------------------
// const graf3 = d3.select("#graf2")

// const marginsD = {
//   top: 50,
//   right: 20,
//   bottom: 70,
//   left: 105,
// }
// const anchoTotalD = +graf3.style("width").slice(0, -2)
// const altoTotalD = (anchoTotalD * 9) / 16

// const anchoD = anchoTotalD - marginsD.right - marginsD.left
// const altoD = altoTotalD - marginsD.top - marginsD.bottom

// const svg2 = graf3
//   .append("svg")
//   .attr("width", anchoTotalD)
//   .attr("height", altoTotalD)
//   .attr("class", "graf2")

// svg2
//   .append("rect")
//   .attr("x", 0)
//   .attr("y", 0)
//   .attr("width", anchoD)
//   .attr("height", altoD)
//   .attr("transform", `translate(${marginsD.left}, ${marginsD.top})`)
//   .classed("backdrop", true)
//   .style("fill", "#AEB6BF");

// const g2 = svg2
//   .append("g")
//   .attr("transform", `translate(${marginsD.left}, ${marginsD.top})`)

// const load2 = async () => {
//   let data = await d3.csv("poblacion_española.csv", d3.autoType)
//   //data.sort((a, b) => b.Poblacion - a.Poblacion)

//   // Accessor
//   const xAccessor = (d) => d.Año
//   const yAccessor = (d) => d.Poblacion

//   // Escaladores
//   const tiendas = d3.map(data, (d) => d.Año)
//   const x = d3
//     .scaleBand()
//     .domain(tiendas)
//     .range([0, anchoD])
//     .paddingOuter(0.2)
//     .paddingInner(0.1)
//   const y = d3
//     .scaleLinear()
//     .domain([0, d3.max(data, yAccessor)])
//     .range([altoD, 0])

//   const rect = g2
//     .selectAll("rect")
//     .data(data)
//     .enter()
//     .append("rect")
//     .attr("x", (d) => x(0))
//     .attr("y", (d) => y(0))
//     .transition()
//     .duration(2000)
//     .attr("x", (d) => x(xAccessor(d)))
//     .attr("y", (d) => y(yAccessor(d)))
//     .attr("width", x.bandwidth())
//     .attr("height", (d) => altoD - y(yAccessor(d)))
//     .style("fill", "#1B4F72");

//   g2.append("text")
//     .attr("x", anchoD / 2)
//     .attr("y", -10)
//     .attr("text-anchor", "middle")
//     .classed("titulo", true)
//     .text("Variación absoluta de población")

//   const xAxis = d3.axisBottom(x)
//   const xAxisGroup = g2
//     .append("g2")
//     .attr("transform", `translate(0, ${altoD})`)
//     .classed("axis", true)
//     .call(xAxis)
//   const yAxis = d3.axisLeft(y).ticks(10)
//   const yAxisGroup = g2.append("g2").classed("axis", true).call(yAxis)
// }

// load2()
