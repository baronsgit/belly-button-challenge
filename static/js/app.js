const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// load the data
d3.json(url).then(function(data) {
    console.log(data)
});

function init() {
    // set dropdown menu
    let ddMenu = d3.select("#selDataset");

    // gather data
    d3.json(url).then(function(data) {
        // set names variable
        let names = data.names;

        // load dropdownmenu
        for (let i = 0; i < names.length; i++)
        {
            mi = names[i];
            console.log(mi)
            ddMenu.append("option").text(mi).property("value", mi);
        }

        // names.forEach((mi) => {
        //     console.log(mi);
        //     ddMenu.append("option").text(mi).property("value",mi);
        // });

        // set the sample item
        let firstSample = names[0]

        console.log(firstSample)

    });
};

function createMetadata(sourceData) {
    
}

function createBarChart(sourceData) {

}

function createBubbleChart(sourceData) {

}

function createGaugeChart(sourceData) {

}

init();
