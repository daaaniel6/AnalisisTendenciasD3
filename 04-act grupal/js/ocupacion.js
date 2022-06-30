// Se selecciona la variable a utilizar
const graf2 = d3.select("#graf2")

//Se establecen los margenes 
const margenesOcupacion = {
    top: 50,
    right: 20,
    bottom: 70,
    left: 105,
}


// Se establecen y ajustan las dimensiones para el gráfico
const anchoTotalOcupacion = +graf2.style("width").slice(0, -2)
const altoTotalOcupacion = (anchoTotalOcupacion * 9) / 16

const anchoOcupacion = anchoTotalOcupacion - margenesOcupacion.right - margenesOcupacion.left
const altoOcupacion = altoTotalOcupacion - margenesOcupacion.top - margenesOcupacion.bottom

const svgOcupacion = graf2
    .append("svg")
    .attr("width", anchoTotalOcupacion)
    .attr("height", altoTotalOcupacion)
    .attr("class", "graf")



svgOcupacion
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", anchoOcupacion)
    .attr("height", altoOcupacion)
    .attr("transform", `translate(${margenesOcupacion.left}, ${margenesOcupacion.top})`)
    .classed("backdrop", true)
    //    .attr("fill", function (d) { return color(d) })
    .style("fill", "#AEB6BF");

const gOcupacion = svgOcupacion
    .append("g")
    .attr("transform", `translate(${margenesOcupacion.left}, ${margenesOcupacion.top})`)



const load6 = async () => {

    //Se carga la data correspondiente
    let data = await d3.csv("ocupacion_en_españa.csv", d3.autoType)

    // Accessor
    const xAccessor = (d) => d.Año
    const yAccessor = (d) => d.Personas_ocupadas

    // Escaladores
    const tiendas = d3.map(data, (d) => d.Año)
    const x = d3
        .scaleBand()
        .domain(tiendas)
        .range([0, anchoOcupacion])
        .paddingOuter(0.2)
        .paddingInner(0.1)
    const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, yAccessor)])
        .range([altoOcupacion, 0])

    const rect = gOcupacion
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d) => x(0))
        .attr("y", (d) => y(0))
        .transition()
        .duration(2000)
        .attr("x", (d) => x(xAccessor(d)))
        .attr("y", (d) => y(yAccessor(d)))
        .attr("width", x.bandwidth())
        .attr("height", (d) => altoOcupacion - y(yAccessor(d)))
        .style("fill", "#1B4F72");
    //.attr("fill", function (d) { return color(d) })

    gOcupacion.append("text")
        .attr("x", anchoOcupacion / 2)
        .attr("y", -10)
        .attr("text-anchor", "middle")
        .classed("titulo", true)
        .text("Ocupacion de población")


    const xAxis = d3.axisBottom(x)
    const xAxisGroup = gOcupacion
        .append("g")
        .attr("transform", `translate(0, ${altoOcupacion})`)
        .classed("axis", true)
        .call(xAxis)



    const yAxis = d3.axisLeft(y).ticks(10)
    const yAxisGroup = gOcupacion.append("g").classed("axis", true).call(yAxis)
}

load6()

