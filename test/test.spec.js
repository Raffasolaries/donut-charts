describe('test', function () {
  /* beforeEach(function () {
    renderDonut('revenue')
  }); */

  afterEach(function() {
    d3.selectAll('svg').remove();
  });

  it('revenue total', function () {
    expect(data('revenue').total).toBe(200000);
  });

  it('types contains revenue', function () {
    expect(types).toContain('revenue')
  });

  it('should have the correct height && width', function () {
    var height = 200
    var width = 200
    var svg = d3.select('#revenue').append('svg').attr('width', width).attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)
    expect(d3.select('body').select('svg').style('height')).toBe('200px');
    expect(d3.select('body').select('svg').style('width')).toBe('200px');
  });
});
