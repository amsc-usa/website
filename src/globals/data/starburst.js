// function () {
//   for () {
//
//   }
// }

// 1. Create root node {}
// 2. Give it 5 children
// 3. cycle through all children
// 3.1. does it have children? yes or no
//      (maybe first time all yes?)
//      (last cycle all no)
// 3.2. give it 2-8 children
// 3.3. repeat 3-4 times

// const starter = {
//   children: [{
//     children: []
//   }]
// };
//
// function randomStarburstData () {
//
//   for () {
//
//   }
//   start.children.children.push({ size: 1 });
//
//
//   return starter;
// }

module.exports = {
  "children": [{ // hidden
    "children": [{ // hidden
      "children": [{ // hidden
        "children": [{ // hidden
          "children": [{ // hidden
          "children": [{
            "children": [{
              "size": 8
            }, {
              "children": [{
                "size": 10
              }, {
                "size": 8
              }]
            }, {
              "size": 2
            }, {
              "children": [{
                "size": 10
              }, {
                "size": 4
              }]
            }]
          }, {
            "size": 10
          }, {
            "size": 10
          }]
        }, {
          "children": [{
            "children": [{
              "size": 3
            }, {
              "size": 3
            }, {
                "size": 3
            }]
          }, {
            "children": [{
              "size": 3
            }, {
              "size": 3
            }, {
                "size": 3
            }]
          }, {
              "children": [{
                "size": 3
              }, {
                "size": 3
              }, {
                  "size": 3
              }]
          }]
        }, {
          "children": [{
              "size": 1
            }, {
              "size": 2
            }]
        }, {
            "children": [{
                "size": 1
              }, {
                "size": 2
              }]
          }, {
          "children": [{
            "children": [{
              "size": 4
            }, {
              "size": 10
            },{
              "size": 4
            }, {
              "children": [{
                "size": 8
              }, {
                "size": 4
              }]
            }]
            }, {
              "size": 8
            }]
        }, {
          "children": [{
            "children": [{
              "children": [{
                "size": 1
              }, {
                "size": 2
              }]
            }, {
              "size": 4
            }]
          }, {
            "children": [{
              "size": 8
            }, {
              "size": 4
            }]
          }]
        }]
      }]
    }]
    }]
  }]
};
