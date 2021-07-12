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




















  