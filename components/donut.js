var height = 200
var width = 200
var totalRadius = Math.min(width, height) / 2
var donutHoleRadius = totalRadius * 0.15

var renderDonut = (type) => {
  console.log('we are in donut', data(type));

  var formatDot = d3.format('s')
  var formatEuro = d3.format('$')
  d3.formatLocale({
    currency: ['', '€']
  })
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

  // var amount = '<p>'+data(type).total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')+'&euro;</p>';
  var amount = type === 'revenue' ? formatEuro(data(type).total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : data(type).total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  svg.append('text')
	   .attr('text-anchor', 'middle')
		 .attr('font-size', '1.4em')
     .attr('y', 22)
     .text(amount)

  
     //.html('<p>'+data(type).total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')+'&euro;</p>')
  // if (type === 'revenue') svg.html('&euro;')
	   // .text(data(type).total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')+'€');
  
  /* svg
    .append('text').text(type.toUpperCase())
    .attr({
      x: (width - type.toUpperCase().length) / 2,
      y: (height / 2,
      dy: height / 2,
      'text-anchor': 'middle',
      'dominant-baseline': 'middle',
      'pointer-events': 'none'
    }) */

    /* svg
      .append('text').text(data(type).total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')+'€')
      .attr({
        x: (width - type.toUpperCase().length) / 2,
        y: height /2,
        dy: 10,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        'pointer-events': 'none'
      }) */
    //.style('fill', fill)
    /* .text((d, i) => {
        return type.toUpperCase()
        return data(type).total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')+'€'
    }) */

  /* var legendItemSize = 18
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
    //.style('fill', color);

  legend
    .append('text')
    .attr('x', legendItemSize + legendSpacing)
    .attr('y', legendItemSize - legendSpacing)
    .text(type.toUpperCase()) */
}
