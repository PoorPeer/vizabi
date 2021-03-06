import * as utils from 'base/utils';
import Component from 'base/component';

import {
  question as iconQuestion
} from 'base/iconset';

/*!
 * VIZABI INDICATOR PICKER
 * Reusable indicator picker component
 */

var IndPicker = Component.extend({

    /**
     * Initializes the Indicator Picker.
     * Executed once before any template is rendered.
     * @param config The options passed to the component
     * @param context The component's parent
     */
    init: function(config, context) {

        this.name = 'gapminder-indicatorpicker';
        this.template = '<span class="vzb-ip-holder"><span class="vzb-ip-select"></span><span class="vzb-ip-info"></span></span>';

        var _this = this;

        this.model_expects = [{
            name: "marker",
            type: "model"
        }, {
            name: "language",
            type: "language"
        }];

        this.markerID = config.markerID;
        if(!config.markerID) utils.warn("indicatorpicker.js complains on 'markerID' property: " + config.markerID);

        this.model_binds = {
            "change:language.strings": function(evt) {
                _this.updateView();
            },
            "ready": function(evt) {
                _this.updateView();
            }
        };
        
        if(this.markerID) {
          this.model_binds["change:marker." + this.markerID + ".which"] = function(evt) {
              _this.updateView();
            } 
        }

        //contructor is the same as any component
        this._super(config, context);
    },

    ready: function() {
        this.updateView();
    },


    readyOnce: function() {
        var _this = this;

        this.el_select = d3.select(this.element).select('.vzb-ip-select');

        this.el_select.on("click", function() {
            var rect = _this.el_select.node().getBoundingClientRect();
            var rootEl = _this.root.element instanceof Array? _this.root.element : d3.select(_this.root.element);
            var rootRect = rootEl.node().getBoundingClientRect();
            var treemenuComp = _this.root.findChildByName("gapminder-treemenu");
            var treemenuColWidth = treemenuComp.activeProfile.col_width; 
            var treemenuPaddLeft = parseInt(treemenuComp.wrapper.style('padding-left'), 10) || 0; 
            var treemenuPaddRight = parseInt(treemenuComp.wrapper.style('padding-right'), 10) || 0; 
            var topPos = rect.bottom - rootRect.top;
            var leftPos = rect.left - rootRect.left - (treemenuPaddLeft + treemenuPaddRight + treemenuColWidth - rect.width) * .5;
        
            treemenuComp
                .markerID(_this.markerID)
                .alignX("left")
                .alignY("top")
                .top(topPos)
                .left(leftPos)
                .updateView()
                .toggle();
        });

        this.infoEl = d3.select(this.element).select('.vzb-ip-info');
        utils.setIcon(this.infoEl, iconQuestion)
          .select("svg").attr("width", "0px").attr("height", "0px");
          
        this.infoEl.on("click", function() {
          _this.root.findChildByName("gapminder-datanotes").pin();
        })
        this.infoEl.on("mouseover", function() {
          var rect = _this.el_select.node().getBoundingClientRect();
          var rootRect = _this.root.element.getBoundingClientRect();
          var topPos = rect.bottom - rootRect.top;
          var leftPos = rect.left - rootRect.left + rect.width;
          
          _this.root.findChildByName("gapminder-datanotes").setHook(_this.markerID).show().setPos(leftPos, topPos);
        })
        this.infoEl.on("mouseout", function() {
          _this.root.findChildByName("gapminder-datanotes").hide();
        })


    },

    
    updateView: function() {
        if(!this._readyOnce) return;

        var _this = this;
        var translator = this.model.language.getTFunction();
        
        var which = this.model.marker[this.markerID].which;
        var type = this.model.marker[this.markerID]._type;
        
        //Let the indicator "_default" in tree menu be translated differnetly for every hook type
        this.el_select.text(translator("indicator" + (which==="_default" ? "/" + type : "") + "/" + which));
        
        // hide info el if no data is available for it to make sense
        var hideInfoEl = ((translator("description/" + which) == "description/" + which)
            && (translator("sourceName/" + which) == "sourceName/" + which)
            && !_this.model.marker[_this.markerID].getConceptprops().sourceLink); 
        this.infoEl.classed("vzb-hidden", hideInfoEl);
    }
    
});

export default IndPicker;