var clipsy = require('./index')

describe('clipsy', function(){
  it('should work with node.js require', function(){
    //console.log(clipsy)
    if(!clipsy) throw new Error('clipsy require failed')
  })
  it('should take a set of polygons and return a unioned polygon', function(){
    clipper = new clipsy.Clipper()

    var paths = [[{X:-85.53508758544922,Y:33.28777693677941},{X:-85.53508758544922,Y:33.32751625923708},{X:-85.43895721435547,Y:33.32751625923708},{X:-85.43895721435547,Y:33.28777693677941}]];

    var delta = 5
    var scale = 100000000000000
    var miterLimit = 5
    var joinType = 1

    offsetResult = clipper.OffsetPolygons(paths, delta * scale, joinType, miterLimit, true);

    if(!offsetResult) throw new Error('no offset result')
    //console.log(offsetResult)
  })
})