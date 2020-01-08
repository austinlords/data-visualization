var height = 400;
var width = 800;

// Update…
var p = d3
  .select("main")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .text(function(d) {
    return d;
  });

// Enter…
p.enter()
  .append("p")
  .text(function(d) {
    return d;
  });

// Exit…
