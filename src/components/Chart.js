import React, { useRef, useEffect, useState } from 'react';

import { StyledChart } from './modules/StyledChart';
import {
  select,
  line,
  extent,
  axisBottom,
  axisLeft,
  scaleLinear,
  scaleTime,
  timeFormat,
  pointer,
} from 'd3';

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      // set resized dimensions here
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, []);
  return dimensions;
};

const Chart = (props) => {
  const [data, setData] = useState([props.data]);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const getKeys = (data) => {
      let keysArray = [];
      Object.keys(data[0]).map((obj) => {
        let newDate = new Date(obj);
        keysArray.push(newDate);
      });
      return keysArray;
    };
    const keys = getKeys(data);

    const getValues = (data) => {
      let valuesArray = [];
      Object.keys(data[0]).map((obj) => {
        let newElem = data[0][obj];
        valuesArray.push(newElem);
      });
      return valuesArray;
    };
    const values = getValues(data);

    const maxValue = Math.max(...values);

    const xScale = scaleTime()
      .domain(
        extent(keys, (d) => {
          return d;
        })
      )
      .range([0, dimensions.width]);

    const yScale = scaleLinear()
      .domain([0, maxValue])
      .range([dimensions.height, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(5)
      .tickFormat(timeFormat('%B %d, %y '));

    svg
      .select('.x-axis')
      .style('transform', `translateY(${dimensions.height}px)`)
      .call(xAxis);

    const yAxis = axisLeft(yScale).ticks(8);
    svg.select('.y-axis').call(yAxis);

    const newData = keys.map((i, index) => {
      return {
        date: i,
        amount: values[index],
      };
    });


    const myLine = line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.amount));

    svg
      .selectAll('.line')
      .data(newData)
      .join('path')
      .attr('class', 'line')
      .attr('d', myLine(newData))
      .attr('fill', 'none')
      .attr('stroke', '#1a73e8')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 2);
  
  }, [data, dimensions]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} style={{ margin: '2rem 0 2rem 3rem' }}>
        <StyledChart ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
         
        </StyledChart>
      </div>
    </React.Fragment>
  );
};

export default Chart;
