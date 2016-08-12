# Structure

```
TakeoffEditorContainer
|__ TakeoffTableEditor
    |__ TakeoffNewRow
    |   |__ TakeoffEditRow
    |__ TakeoffRow ...
    |__ TakeoffRow ...
        |__ TakeoffViewRow
            |__ TakeoffViewMenu
        |__ TakeoffEditRow
            |__ LookupContainer
            |   |__ AutoSuggest [Line No]
            |__ LookupContainer
            |   |__ AutoSuggest [Sheet No]
            |__ LookupContainer
            |   |__ AutoSuggest [Rev No]
            |__ LookupContainer
            |   |__ AutoSelect [Cust. Spec]
            |__ LookupContainer
                |__ AutoSelect [Abbr]
```

## Data Needs

* TakeoffEditorContainer:
    * Takeoffs
    * EditTakeoffId
    * EditTakeoffChanges
* TakeoffTableEditor
    * EditTakeoffId
    * DupState
* TakeoffViewRow
    * TakeoffId
    * Takeoffs
    * Abbreviations (show name)
    * Cust. Specs (show name)
* TakeoffEditRow
    * Takeoffs
    * EditTakeoffId
    * EditTakeoffChanges
* LookupContainer
    * Data collection

## State Tree

```
{
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
            0: {
                lineNumber: '123',
            }
        }
    }
}

function MutationIntent(subject, key, property, value){
    return {
        type: 'MUTATION_INTENT',
        payload: {
            subject,
            key,
            property,
            value
        }
    }
}

MutationIntent('takeoff', 0, 'lineNumber', '123');
```
