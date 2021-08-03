d3.select('button').on('click', doSomething)

function doSomething() {
    d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
        .then(function (data) {
            var circles = d3.select('svg').selectAll('circle').data(data);

            circles.join("circle")
                .attr('cx', d => d.Xi)
                .attr('cy', d => d.Yi)
                .attr('r', 5)
                .attr('fill', d => d.color)
                .transition()
                .duration(3000)
                .delay(500)
                .ease(d3.easeBack)
                .attr('cx', d => d.Xf)
                .attr('cy', d => d.Yf);

        })
}



