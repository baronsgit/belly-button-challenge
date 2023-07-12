const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// const dataPromise = d3.json(url);
// console.log("Data promise: ", dataPromise);

var barData = document.getElementById("bar")
// load the data
d3.json(url).then(function(data) {
    // console.log(data)

    let values = [];
    let otus_lables = [];
    let otus_hover = [];

    let samples = data.samples;

    for (let i = 0; i < samples.length; i++)
    {
        row = samples[i];
        // console.log(row);
        values.push(row.samples_values)
        otus_lables.push(row.otu_ids)
        otus_hover.push(row.otus_lables)
    }

    let trace1 = {x:values, y:otus_hover, text: otus_lables, type: "bar"};
    
    let chartData = [trace1]

    var barlayout = {
        title: 'Top 10 OTUs', bargap: 0.1
    }

    Plotly.newPlot(barData, chartData, barlayout)
});

