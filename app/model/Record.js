Ext.define('pttc.model.Record', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [{
            name: 'id',
            type: 'int',
        },
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'startDate',
            type: 'date',
        },
        {
            name: 'endDate',
            type: 'date',
        },
        {
            name: 'status',
            type: 'string',
            defaultValue: 'STOPPED',
        }
    ],

    validations: [{
        type: 'length',
        field: 'name',
        min: 1,
        max: 250
    }]
});