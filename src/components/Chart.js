import React, { useRef, useEffect, useState } from 'react';
import { StyledChart } from './modules/StyledChart';
import { select, line, curveCardinal, axisBottom, axisLeft, scaleLinear } from 'd3';

const Chart = () => {
  const [data, setData] = useState([25, 37, 43, 56, 20, 65, 75]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const xAxis = axisBottom(xScale).ticks(data.length).tickFormat(index => index+1);
    
    svg.select('.x-axis').style("transform", "translateY(150px").call(xAxis);

    const yAxis = axisLeft(yScale)
    svg.select('.y-axis').call(yAxis);

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    // svg
    //   .selectAll('circle')
    //   .data(data)
    //   .join(
    //     (enter) => enter.append('circle').attr('class', 'new'),
    //     (update) => update.attr('class', 'updated'),
    //     (exit) => exit.remove()
    //   )
    //   .attr('r', (value) => value)
    //   .attr('cx', (value) => value * 2)
    //   .attr('cy', (value) => value * 2)
    //   .attr('stroke', 'red');
    // console.log(svg);
    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr("class", "line")
      .attr('d', myLine)
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [data]);
  return (
    <React.Fragment>
      <StyledChart ref={svgRef}>
        <g className="x-axis" />
        <g className='y-axis' />

      </StyledChart>

      <button onClick={() => setData(data.map((value) => value + 5))}>
        update data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 55))}>
        filter data
      </button>
    </React.Fragment>
  );
};

export default Chart;
