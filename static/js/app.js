function optionChanged(selectednumber) {
  d3.json("samples.json").then(function (data) {
      var filtereddata = data.samples.filter(row => row.id == selectednumber)
      console.log(filtereddata)
      Bardata(filtereddata[0])
      Bubbledata(filtereddata[0])
      var barfilteredmeta = data.metadata.filter(row => row.id == selectednumber)
      showmetadata(barfilteredmeta[0])
  })
}
function init() {
  var dropdown = d3.select("#selDataset") //referencing back to html  and appending dropdown
  d3.json("samples.json").then(function (data) {
      data.names.forEach((people) => {
          dropdown.append("option")
              .text(people)
              .property("value", people)
      })
      //line 17 starts looking at names list with ids. then looping through the people on list
      var initialdata = data.samples[0]
      console.log(data);
      Bardata(initialdata)
      Bubbledata(initialdata)
      var metadata = data.metadata[0]
      showmetadata(metadata)
  });
}
init()
// code above will populate below after code is run






















  