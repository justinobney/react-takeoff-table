const stateTree = {
    takeoffs: {
        0: {id:0, projectAbbreviationId:1},
        1: {id:1, projectAbbreviationId:1},
        2: {id:2, projectAbbreviationId:2},
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
        takeoff: {
          id: 0,
          changes: {
            lineNumber: '123',
          }
        }
    }
};

export default stateTree;
