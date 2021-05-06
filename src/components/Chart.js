import React, { useRef, useEffect, useState } from 'react';
import { StyledChart } from './modules/StyledChart';
import { select, line, curveCardinal } from 'd3';

const Chart = () => {
  const [data, setData] = useState([25, 37, 43, 56, 20, 65, 75]);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y((value) => 150 - value)
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
      .selectAll('path')
      .data([data])
      .join('path')
      .attr('d', (value) => myLine(value))
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [data]);
  return (
    <React.Fragment>
      <StyledChart ref={svgRef}>
        <path d="M0,150 100,100 150,120" stroke="blue" fill="none" />
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
