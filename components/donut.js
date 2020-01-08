var height = 200
var width = 200
var totalRadius = Math.min(width, height) / 2
var donutHoleRadius = totalRadius * 0.15

var renderDonut = (type) => {
  /* d3.formatLocale({
    thousands: '.',
    currency: ['€', '']
  }) */
  // var euro = d3.timeFormatDefaultLocale('es_ES');
  /* var formatDot = d3.format('s')
  var formatCurrency = d3.format('$') */
  var color = d3.scaleOrdinal().domain(data(type).values)
    .range(data(type).colors)

  var svg = d3.select('#'+type).append('svg').attr('width', width).attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
  
  var arc = d3.arc().innerRadius(totalRadius - donutHoleRadius).outerRadius(totalRadius)

  var pie = d3.pie()
    .value((d) => d.value)
    .sort(null)

  var path = svg
    .selectAll('path')
    .data(pie(data(type).values))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => color(d.value))

  

  svg.append('text')
	   .attr('text-anchor', 'middle')
		 .attr('font-size', '1.1em')
		 .attr('y', -7)
     .text(type.toUpperCase())
     .style('fill', '#cdcdcd')

  // var amount = type === 'revenue' ? formatCurrency(data(type).total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : data(type).total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  var amount = data(type).total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  svg.append('text')
	   .attr('text-anchor', 'middle')
		 .attr('font-size', '1.4em')
     .attr('y', 22)
     .text(amount)
}
