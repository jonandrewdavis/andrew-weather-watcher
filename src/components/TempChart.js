import useD3 from '../utils/d3ref';
import * as d3 from 'd3';

const TempChart = ({ todayTemps, data }) => {
  const yMin = todayTemps.min - 5;

  const ref = useD3(
    svg => {
      const height = 110;
      const width = 650;
      const margin = { top: 20, right: 20, bottom: 20, left: 20 };

      const x = d3
        .scaleTime()
        .domain(d3.extent(data, d => d.dt))
        .range([margin.left, width - margin.right]);

      const y = d3
        .scaleLinear()
        .domain([yMin, d3.max(data, d => d.temp)])
        .nice()
        .range([height - margin.bottom, margin.top]);

      const y1 = d3
        .scaleLinear()
        .domain([yMin, d3.max(data, d => d.temp)])
        .nice()
        .range([height - margin.bottom, margin.top]);

      const xAxis = g =>
        g
          .attr('transform', `translate(0,${height - margin.bottom})`)
          .style('color', '#555')
          .style('stroke-width', 0)
          .call(d3.axisBottom(x).tickSize(0));

      svg.select('.x-axis').call(xAxis);

      const curve = d3.curveCatmullRom;
      const area = d3
        .area()
        .curve(curve)
        .x(d => x(d.dt))
        .y0(y(yMin))
        .y1(d => y(d.temp));

      svg
        .select('.plot-area')
        .append('path')
        .datum(data)
        .attr('fill', '#fff5cc')
        .attr('d', area);

      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#ffcc00')
        .attr('stroke-width', '0.1em')
        .attr(
          'd',
          d3
            .line()
            .x(function (d) {
              return x(d.dt);
            })
            .y(function (d) {
              return y(d.temp);
            })
        );

      svg
        .selectAll('.label')
        .data(data.filter((d, i) => i % 2 === 0))
        .enter()
        .append('text')
        .style('font-size', '0.7em')
        .attr('class', 'label')
        .attr('text-anchor', 'middle')
        .attr('fill', '#555')
        .attr('x', d => x(d.dt) + 5)
        .attr('y', d => y1(d.temp + 5))
        .attr('height', d => y1(yMin) - y1(d.temp))
        .text(function ({ temp }) {
          return Math.floor(temp);
        });
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 110,
        width: '100%',
        marginRight: '0px',
        marginLeft: '0px',
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default TempChart;
