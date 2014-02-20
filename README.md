clipsy
======

Clipsy is a node.js compatible fork of jsclipper [JS]... which is a port of clipper [C++, C#, Delphi].

![screen shot 2014-02-20 at 2 51 14 pm](https://f.cloud.github.com/assets/814300/2225015/fbddb5b6-9a85-11e3-8867-8aef15c740ac.jpg)

###Install

```bash
npm install clipsy
```

###Usage

####Buffering Polygons
```js
var clipsy = require('./index')
clipper = new clipsy.Clipper()

var paths = [[{X:-85.53508758544922,Y:33.28777693677941},{X:-85.53508758544922,Y:33.32751625923708},{X:-85.43895721435547,Y:33.32751625923708},{X:-85.43895721435547,Y:33.28777693677941}]];

var delta = 5
var miterLimit = 5
var joinType = 1

offsetResult = clipper.OffsetPolygons(paths, delta, joinType, miterLimit, true);
```
