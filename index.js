var data = [1000, 880, 30, 21, 15, 6]


var body = d3.select("body");
var div = body.append("div");
div.html("Hello, worldsss!");


console.log(body)

d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter()
  .append("div")
  .style("width", function(d) { return d + "px"; })
  .text(function (d) { return d; });
