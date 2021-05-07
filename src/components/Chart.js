import React, { useRef, useEffect, useState } from 'react';
import { StyledChart } from './modules/StyledChart';
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisLeft,
  scaleLinear,
  scaleTime,
  timeFormat,
  curveBasis,
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

const Chart = ({ cases }) => {
  const [chartData, setChartData] = useState([]);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  const getKeys = (chartData) => {
    let keysArray = [];
    Object.keys(chartData).map((obj) => {
      let newDate = new Date(obj);
      keysArray.push(newDate);
    });
    return keysArray;
  };
  const keys = getKeys(cases);
  console.log(keys);

  const getValues = (chartData) => {
    let valuesArray = [];
    Object.keys(chartData).map((obj) => {
      let newElem = chartData[obj];
      valuesArray.push(newElem);
    });
    return valuesArray;
  };
  const values = getValues(cases);
  console.log(values);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const minDate = keys[0];
    const maxDate = keys[keys.length - 1];

    const maxValue = Math.max(...values);

    const xScale = scaleTime()
      .domain([minDate, maxDate])
      .range([0, dimensions.width]);

    const yScale = scaleLinear()
      .domain([0, maxValue])
      .range([dimensions.height, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(5)
      .tickFormat(timeFormat('%B %d, %Y'));

    svg
      .select('.x-axis')
      .style('transform', `translateY(${dimensions.height}px)`)
      .call(xAxis);

    const yAxis = axisLeft(yScale).ticks(5);
    svg.select('.y-axis').call(yAxis);

    const myLine = line()
      .x(function (d) {
        return xScale(d.key);
      })
      .y(function (d) {
        return yScale(d.value);
      })
      .curve(curveBasis);


    svg
      .selectAll('.line')
      .data([chartData])
      .join('path')
      .attr('class', 'line')
      .attr('d', myLine)
      .attr('fill', 'none')
      .attr('stroke', '#1a73e8');
  }, [chartData, dimensions]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} style={{ margin: '2rem 0 2rem 4rem' }}>
        <StyledChart ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </StyledChart>
      </div>
    </React.Fragment>
  );
};

export default Chart;
