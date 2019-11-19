function handleSvg(width, height)
{
    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "graph-svg-component");
    svg.append("text")
        .attr("x", 600 )
        .attr("y",  20 )
        .style("text-anchor", "middle")
        .attr("font-family", "Gill Sans", "Gill Sans MT")
        .attr("font-size", "1.5em")
        .text("Does being diagnosed with a mental health issue imply deadlier shootings?");
    //Creating legend
    svg.append("text")
        .attr("x", 820 )
        .attr("y", 70 )
        .style("text-anchor", "middle")
        .attr("font-family", "Gill Sans", "Gill Sans MT")
        .attr("font-size", "1.2em")
        .text("Mental Health Issue?");
    svg.append("circle")
        .attr("cx",800)
        .attr("cy",100)
        .attr("r", 6)
        .style("fill", "#9a009a");
    svg.append("circle")
        .attr("cx",800)
        .attr("cy",130)
        .attr("r", 6)
        .style("fill", "#4b0082");
    svg.append("text")
        .attr("x", 820)
        .attr("y", 100)
        .text("Yes, number of fatalities: " + newData[1].fatalities)
        .attr("font-family", "Gill Sans", "Gill Sans MT")
        .style("font-size", "15px")
        .attr("alignment-baseline","middle");
    svg.append("text")
        .attr("x", 820)
        .attr("y", 130)
        .text("No, number of fatalities: " + newData[0].fatalities)
        .attr("font-family", "Gill Sans", "Gill Sans MT")
        .style("font-size", "15px")
        .attr("alignment-baseline","middle");


    svg.append("circle")
        .attr("cx",800)
        .attr("cy",160)
        .attr("r", 6)
        .style("fill", "#e69500");
    svg.append("circle")
        .attr("cx",800)
        .attr("cy",190)
        .attr("r", 6)
        .style("fill", "#ff748c");
    svg.append("text")
        .attr("x", 820)
        .attr("y", 160)
        .text("Unknown, number of fatalities: " + newData[3].fatalities)
        .attr("font-family", "Gill Sans", "Gill Sans MT")
        .style("font-size", "15px")
        .attr("alignment-baseline","middle");
    svg.append("text")
        .attr("x", 820)
        .attr("y", 190)
        .text("Unclear, number of fatalities: " + newData[2].fatalities)
        .attr("font-family", "Gill Sans", "Gill Sans MT")
        .style("font-size", "15px")
        .attr("alignment-baseline","middle");
    svg.append("text")
        .attr("x", 200 )
        .attr("y",  180 )
        .style("text-anchor", "middle")
        .attr("font-family", "Gill Sans", "Gill Sans MT")
        .attr("font-size", "1.0em")
        .text("Each bubble is equivalent to one fatality.");
    return svg;
}
