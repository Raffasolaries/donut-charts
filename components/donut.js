var height = 200
var width = 200
var totalRadius = Math.min(width, height) / 2
var donutHoleRadius = totalRadius * 0.15

var renderDonut = (type) => {
  console.log('we are in donut', data(type));

  var color = d3.scaleOrdinal(d3.schemeCategory10);

  var svg = d3.select('#'+type).append('svg').attr('width', width).attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)

  var arc = d3.arc().innerRadius(totalRadius - donutHoleRadius).outerRadius(totalRadius)

  var pie = d3.pie()
    .value((d) => d.acres)
    .sort(null)

  var path = svg
    .selectAll('path')
    .data(pie(data(type)))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => color(d.data.name))

  var legendItemSize = 18
  var legendSpacing = 4

  var legend = svg
    .selectAll('.legend')
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', (d, i) => {
      var height = legendItemSize + legendSpacing
      var offset = height * color.domain().length / 2
      var x = legendItemSize * -2;
      var y = (i * height) - offset
      return `translate(${x}, ${y})`
    })

  legend
    .append('rect')
    .attr('width', legendItemSize)
    .attr('height', legendItemSize)
    .style('fill', color);

  legend
    .append('text')
    .attr('x', legendItemSize + legendSpacing)
    .attr('y', legendItemSize - legendSpacing)
    .text((d) => d)
}
