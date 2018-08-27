Ext.define('pttc.view.board.Board', {
    extend: 'Ext.tab.Panel',

    requires: [
        'pttc.view.board.BoardController',
        'pttc.view.board.BoardModel'
    ],

    controller: 'board-board',
    viewModel: {
        type: 'board-board'
    },
    tbar: [
        { xtype: 'button', text: 'Add', handler: 'onAdd' },
        { xtype: 'button', text: 'Remove', handler: 'onRemove', disabled:true, itemId:'pttcRemove' },
        { xtype: 'button', text: 'Run', handler: '' },
        { xtype: 'button', text: 'Stop', handler: '' }
    ],
    items: [{
        title: 'Details',
        layout: 'column',
        items: [
            {
                xtype: 'grid',
                itemId: 'pttcGrid',
                height: 400,
                columnWidth: 0.66,             
                bind: {
                    selection: '{theCompany}',
                    store: '{records}'
                },
                listeners: {
                    selectionchange: 'onSelectionChange'
                },
                selType: 'checkboxmodel',             
                columns: [              
                    {
                        text: 'Id',
                        dataIndex: 'id',
                        flex: 1
                    },
                    {
                        text: 'Name',
                        dataIndex: 'name',
                        flex: 2
                    },
                    {
                        text: 'Start Date',
                        dataIndex: 'startDate',
                        flex: 1
                    },
                    {
                        text: 'End Date',
                        dataIndex: 'endDate',
                        flex: 1
                    },
                    {
                        text: 'Status',
                        dataIndex: 'status',
                        flex: 1
                    }
                ],
            }, {
                xtype: 'fieldset', 
                itemId: 'pttcFieldset',
                title: 'Details',
                disabled:true,
                columnWidth: 0.33,
                margin: '0 0 0 10',
                layout: 'anchor',
                defaultType: 'textfield',
                flex: 1,

                items: [{
                        xtype: 'displayfield',
                        fieldLabel: 'id',
                        bind: '{theCompany.id}'
                    },
                    {
                        fieldLabel: 'Name',
                        bind: '{theCompany.name}'
                    },
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Start Date',
                        bind: '{theCompany.startDate}',
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'End Date',
                        bind: '{theCompany.endDate}'
                    }
                ]
            }
        ]
    }, ],
});