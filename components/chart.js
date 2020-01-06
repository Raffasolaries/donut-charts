// import * as d3 from "https://d3js.org/d3.v5.js";
/* var imported = document.createElement("script");
imported.src = "https://d3js.org/d3.v5.js";
imported.type="text/javascript";
document.getElementsByTagName("head")[0].appendChild(imported); */

    
    var hopsData = [{
        name: 'Washington',
        acres: 32205
      }, {
        name: 'Oregon',
        acres: 6807
      }, {
        name: 'Idaho',
        acres: 4975
      }, {
        name: 'Other States',
        acres: 1244
      }, {
        name: 'Canada',
        acres: 257
      }]
      
      var height = 400
      var width = 400
      var totalRadius = Math.min(width, height) / 2
      var donutHoleRadius = totalRadius * 0.5
      var color = d3.scale.category10()
      
      var svg = d3.select('#chart').append('svg').attr('width', width).attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)
      
      var arc = d3.svg.arc().innerRadius(totalRadius - donutHoleRadius).outerRadius(totalRadius)
      
      var pie = d3.layout.pie()
        .value((d) => d.acres)
        .sort(null)
      
      var path = svg
        .selectAll('path')
        .data(pie(hopsData))
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
