Ext.define('pttc.view.board.BoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.board-board',
    onSelectionChange: function (grid, selection) {
        this.processFieldSet(selection);
        this.processRunButton(selection);
        this.processRemoveButton(selection);
        this.processStopButton(selection);

    },
    processFieldSet(selection) {
        var fieldset = Ext.ComponentQuery.query('panel > #pttcFieldset')[0];

        if (selection.length === 1) {
            fieldset.setDisabled(false);
        } else {
            fieldset.setDisabled(true);
        }
    },
    processRunButton(selection) {
        var runButton = Ext.ComponentQuery.query('#pttcRun')[0];
        if (selection.length >= 1) {
            selection.forEach(function (element) {
                runButton.setDisabled(true);
                if (element.data.status === 'STOPPED') {
                    runButton.setDisabled(false);
                }
            })
        } else {
            runButton.setDisabled(true);
        }
    },
    processStopButton(selection) {
        var stopButton = Ext.ComponentQuery.query('#pttcStop')[0];
        if (selection.length >= 1) {
            selection.forEach(function (element) {
                stopButton.setDisabled(true);
                if (element.data.status === 'RUNNING') {
                    stopButton.setDisabled(false);
                }
            })
        } else {
            stopButton.setDisabled(true);
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

    onAdd: function () {
        var grid = Ext.ComponentQuery.query('panel > #pttcGrid')[0];
        var record = new pttc.model.Record({
            name: '',
            startDate: undefined,
            endDate: undefined
        });
        grid.getStore('Records').add(record);
    },
    onRemove: function () {
        var grid = Ext.ComponentQuery.query('panel > #pttcGrid')[0];
        var store = grid.getStore('Records');
        var selectionModel = grid.getView().getSelectionModel().getSelection();
        selectionModel.forEach(function (element) {
            store.removeAt(store.find('id', element.id))
        });
    },
    onRun: function (selection) {
        var grid = Ext.ComponentQuery.query('panel > #pttcGrid')[0];
        var store = grid.getStore('Records');
        var selectionModel = grid.getView().getSelectionModel().getSelection();
        selectionModel.forEach(function (element) {
            if (element.data.status === 'STOPPED') {
                var record = store.getById(element.id);
                record.set('status', 'RUNNING');
            }
        })
    },
    onStop: function (selection) {
        var grid = Ext.ComponentQuery.query('panel > #pttcGrid')[0];
        var store = grid.getStore('Records');
        var selectionModel = grid.getView().getSelectionModel().getSelection();
        selectionModel.forEach(function (element) {
            if (element.data.status === 'RUNNING') {
                var record = store.getById(element.id);
                record.set('status', 'STOPPED');
            }
        })
    },
    onSave: function () {
        var grid = Ext.ComponentQuery.query('panel > #pttcGrid')[0];
        var store = grid.getStore('Records');
        var dirtyRecords = store.getModifiedRecords();
        if (dirtyRecords.length) {
            Ext.Msg.show({
                title: 'Commit changes?',
                message: 'You really want to commit changes?',
                buttons: Ext.Msg.OKCANCEL,
                fn: function (btn) {
                    if (btn === 'ok') {
                        store.commitChanges();
                        Ext.toast({
                            html: 'Data Saved!',
                            title: 'Hey!',
                            width: 200,
                            align: 't'
                        });
                    };
                }
            });
        } else {
            Ext.Msg.show({
                title: 'Ooops',
                message: 'You don\'t have any changes to commit :(',
                buttons: Ext.Msg.OK
            });
        }

    },
    onCancel: function () {
        var grid = Ext.ComponentQuery.query('panel > #pttcGrid')[0];
        var store = grid.getStore('Records');
        var dirtyRecords = store.getModifiedRecords();
        if (dirtyRecords.length) {
            store.rejectChanges();
        } else {
            Ext.Msg.show({
                title: 'Ooops',
                message: 'You don\'t have any changes to discard :(',
                buttons: Ext.Msg.OK
            });

        }



    }
});