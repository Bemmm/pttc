Ext.define('pttc.store.Records', {
    extend: 'Ext.data.Store',
    model: 'pttc.model.Record',
    alias: 'store.records',
    fields: [
        'id', 'name', 'startDate', 'endDate', 'status'
    ],

    data: {
        items: [{
                id: '12fdglkqn12l1k2h4n1',
                name: 'Jean Luc',
                startDate: "",
                endDate: "",
                status: 'RUNNING'
            },
            {
                id: '12fdglkqn12l1k2h4n2',
                name: 'T-Rex Mike',
                startDate: "",
                endDate: "",
                status: 'STOPPED'
            },
            {
                id: '12fdglkqn12l1k2h4n5',
                name: 'John Smith',
                startDate: "",
                endDate: "",
                status: 'RUNNING'
            },
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});