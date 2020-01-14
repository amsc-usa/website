import React, { useEffect, useRef } from "react";
import * as d3 from 'd3';

import data from '../../globals/data/starburst';

import './styles.scss';

const width = 1200;
const height = 1200;
const radius = Math.min(width, height) / 2;

const Starburst = () => {
  let starburstSVG = useRef();
  let g, partition, root, arc;

  useEffect(() => {
    g = d3.select(starburstSVG.current)
          .attr('width', width)
          .attr('height', height)
          .attr('viewBox', `0 0 ${height} ${width}`)
          .append('g')
          .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    partition = d3.partition()
                  .size([1.4 * Math.PI, radius]); // 2 * Math.PI update this for a partial circle?

    root = d3.hierarchy(data)
             .sum(function (d) { return d.size});

    partition(root);

    arc = d3.arc()
            .startAngle(function (d) { return d.x0 })
            .endAngle(function (d) { return d.x1 })
            .innerRadius(function (d) { return d.y0 })
            .outerRadius(function (d) { return d.y1 });

    g.selectAll('path')
     .data(root.descendants())
     .enter()
     .append('path')
     .attr("display", function (d) { return d.depth > 4 ? null : "none"; })
     .attr("d", arc)
     .style('stroke', '#FCFCFD')
     .style('stroke-width', '5px')
     .style("fill", '#F5F5F9');
  }, []);

  return (
    <>
      <svg className="ams-starburst" ref={starburstSVG} preserveAspectRatio="none"></svg>
    </>
  );
};

export default Starburst;
