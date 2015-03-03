define([
    'components/_gapminder/buttonlist/dialogs/dialog'
], function(Dialog) {

    var ColorsDialog = Dialog.extend({
        
    	/**
         * Initializes the dialog component
         * @param config component configuration
         * @param context component context (parent)
         */
        init: function(config, parent) {
            this.name = 'colors';
            this._super(config, parent);
        }
    });

    return ColorsDialog;
});