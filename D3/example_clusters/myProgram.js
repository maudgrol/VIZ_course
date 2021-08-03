let url = "https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv";

d3.select('#cme').on('click',
  function(){
    // d3.selectAll('circle').remove()
    d3.csv(url, d3.autoType).then(loadAndParse)
  }
)


// function loadAndParse(data) {

//   d3.select('svg')
//     .selectAll()
//     .data(data)
//     .join('circle')
//     .attr('cx', d => d.Xi)
//     .attr('cy', d => d.Yi)
//     .attr('r', 5)
//     .attr('fill', d => d.color)
//     .transition()
//     .duration(5000)
//     .attr('cx', d => d.Xf)
//     .attr('cy', d => d.Yf);

//   d3.selectAll('circle').on('mouseover', function(){
//     d3.select(this).transition().attr('r', 20);
//   })

//   d3.selectAll('circle').on('mouseout', function(){
//     d3.select(this).transition().attr('r', 5);
//   })


// }

var i = 0;

  // If we want to illustrate how the join works properly even if the data
  // is changing dynamically
  function loadAndParse(){
    d3.csv(url, d3.autoType).then(function(data){
      data = d3.shuffle(data).slice(0, Math.floor(6 + Math.random() * 20))
      // someNumber = (Math.random()*100).toFixed(0);
      i += 1;
      console.log(data);
      d3.select('svg')
      .selectAll('.myclass' + i)
      .data(data)
      .join('circle')
      .attr('class', 'myclass' + i)
      .attr('cx', d => d.Xi)
      .attr('cy', d => d.Yi)
      .attr('r', 5)
      .attr('fill', d => d.color)
      .transition()
      .duration(5000)
      .attr('cx', d => d.Xf)
      .attr('cy', d => d.Yf);
    })
  }






