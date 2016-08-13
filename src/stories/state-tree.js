const stateTree = {
    takeoffs: {
      0: {id:0, lineNumber:''},
      1: {id:1, lineNumber:'1234', customerSpecId:1, size:2, quantity:5, projectAbbreviationId:1},
      2: {id:2, lineNumber:'1234', customerSpecId:1, size:2, quantity:5, projectAbbreviationId:2},
      3: {id:3, lineNumber:'1234', customerSpecId:1, size:2, quantity:5, projectAbbreviationId:1},
    },
    abbreviations: {
      1: {id:1, name:'AF'},
      2: {id:2, name:'BW'},
    },
    customerSpecs: {
      1: {id:1, name:'Spec 1'},
    },
    lineNumbers: [ 'Line 1' ],
    sheetNumbers: [ 'Sheet 1' ],
    revisionNumbers: [ 'Revision 1' ],
    ui: {
      dupState: {
        lineNumber: true,
      }
    },
    mutationIntent: {
      takeoffs: {
        id: 1,
        changes: {}
      },
      abbreviations: {
        id: 0,
        changes: {}
      },
      customerSpecs: {
        id: 0,
        changes: {}
      }
    }
};

export default stateTree;
