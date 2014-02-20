var clipsy = require('./index')

describe('clipsy', function(){
  it('should work with node.js require', function(){
    //console.log(clipsy)
    if(!clipsy) throw new Error('clipsy require failed')
  })
  it('should take a set of polygons and return a unioned polygon', function(){
    clipsy = new clipsy.Clipper()
    console.log(clipsy)
    var paths = [[{X:30,Y:30},{X:130,Y:30},{X:130,Y:130},{X:30,Y:130}],
                 [{X:60,Y:60},{X:60,Y:100},{X:100,Y:100},{X:100,Y:60}]];

    var delta = 30
    var scale = 2

    var param_delta = 0
    var param_miterLimit = 5
    offsetResult = clipsy.OffsetPolygons(paths, param_delta, 0, param_miterLimit, true);

    console.log(offsetResult)
  })
})