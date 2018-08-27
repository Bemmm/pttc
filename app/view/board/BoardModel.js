Ext.define('pttc.view.board.BoardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.board-board',
    requires: [
        'pttc.store.Records'
    ],    
    data: {},
    stores: {
        records: {
            type: 'records'
        }
    }

});