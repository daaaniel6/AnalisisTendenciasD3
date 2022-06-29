// Establecemos las dimensiones y los márgenes del gráfico
var margin = {top: 80, right: 40, bottom: 30, left: 70},
    width = 780 - margin.left - margin.right,
    height = 315 - margin.top - margin.bottom;

// Establecemos las escalas y sus rangos a lo largo de los ejes x y
//var x = d3.scaleTime().range([0, width]);
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);


// Creamos el eje X, formateando las fechas
var xAxis = d3.axisBottom(x)
// Creamos la figura svg
var svg = d3.select("#graf_linea").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")
        
// Creamos una línea que más tarde cargaremos en el path
var valueline = d3.line()
    .x(function(d) { return x(d.Año) })
    .y(function(d) { return y(d.Evol) });          



const load = async () => {

  // Se hace la lectura del dataset para la tendencia de la evolución de españa
  let data = await d3.csv("evol_españa.csv", d3.autoType)
   // Escalamos el rango de los datos
   x.domain(d3.extent(data, function(d) { return d.Año; }));
   y.domain([40, d3.max(data, function(d) { return d.Evol; }) ]);
  
   // Añadimos y estilizamos la línea
   svg.append("path")
   .data([data])
   .attr("class", "line")
   .attr("d", valueline)
   
 

  // Añadimos los ejes
  svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis)
  .selectAll("text")
  //.attr('text-anchor', 'middle')
  .style('font-size', '11px')
  .style('font-family', '"Open Sans", sans-serif')
  .attr("transform", function(d) {
        return "rotate(-20)"
        })
                

svg.append("g")
  .call(d3.axisLeft(y))
  

}

load()





 

