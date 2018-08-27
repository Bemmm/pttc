Ext.define('pttc.view.board.BoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.board-board',

    onSelectionChange: function (grid, selection) {
        this.processRemoveButton(selection);
        this.processFieldSet(selection);

    },
    processFieldSet(selection) {
        var fieldset = Ext.ComponentQuery.query('panel > #pttcFieldset')[0];

        if (selection.length === 1) {
            fieldset.setDisabled(false);
        } else {
            fieldset.setDisabled(true);
        }
    },
    processRemoveButton(selection) {
        var removeButton = Ext.ComponentQuery.query('#pttcRemove')[0];

        if (selection.length >= 1) {
            removeButton.setDisabled(false);
        } else {
            removeButton.setDisabled(true);
        }
    },
    onRemove: function(){
        var grid = Ext.ComponentQuery.query('panel > #pttcGrid')[0];
        var store = grid.getStore('Records');
        var selectionModel = grid.getView().getSelectionModel().getSelection();
        selectionModel.forEach(function(element) {
            store.removeAt(store.find('id', element.id))
        });
    },
    onAdd: function () {
        var grid = Ext.ComponentQuery.query('panel > #pttcGrid')[0];
        var record = new pttc.model.Record({
            name: '',
            startDate: undefined,
            endDate: undefined
        });
        grid.getStore('Records').add(record);
    }
});