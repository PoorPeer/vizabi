import * as utils from 'utils';
import Events from 'events';

//classes are vzb-portrait, vzb-landscape...
var class_prefix = 'vzb-';
var class_presentation = 'presentation';
var class_portrait = 'vzb-portrait';
var class_lansdcape = 'vzb-landscape';

var Layout = Events.extend({

  screen_profiles: {
    small: {
      min_width: 0,
      min_height: 0
    },
    medium: {
      min_width: 600,
      min_height: 400
    },
    large: {
      min_width: 1000,
      min_height: 880
    }
  },

  /**
   * Initializes the layout manager
   */
  init: function(ui_options) {
    this.ui = ui_options || {};
      
    this._container = null;
    //dom element
    this._curr_profile = null;
    this._prev_size = {};
    //resize when window resizes
    var _this = this;

    this.resizeHandler = this.resizeHandler || resize.bind(this);

    window.addEventListener('resize', this.resizeHandler);
    this._super();
  },

  /**
   * Calculates the size of the newly resized container
   */
  setSize: function() {
    var _this = this;
    var width = this._container.clientWidth;
    var height = this._container.clientHeight;
    if(this._prev_size && this._prev_size.width === width && this._prev_size.height === height) {
      return;
    }

    // presentation mode overrides any size profile
    if (this.ui.presentation) {
        
        this._curr_profile = class_presentation;
    
    } else {
        
        // choose profile depending on size
        utils.forEach(this.screen_profiles, function(range, size) {
          //remove class
          utils.removeClass(_this._container, class_prefix + size);
          //find best fit
          if(width >= range.min_width && height >= range.min_height) {
            _this._curr_profile = size;
          }
        });
    }
      
    //update size class
    utils.addClass(this._container, class_prefix + this._curr_profile);
    //toggle, untoggle classes based on orientation
    if(width < height) {
      utils.addClass(this._container, class_portrait);
      utils.removeClass(this._container, class_lansdcape);
    } else {
      utils.addClass(this._container, class_lansdcape);
      utils.removeClass(this._container, class_portrait);
    }
    this._prev_size.width = width;
    this._prev_size.height = height;
    this.trigger('resize');
  },

  /**
   * Sets the container for this layout
   * @param container DOM element
   */
  setContainer: function(container) {
    this._container = container;
    this.setSize();
  },

  /**
   * Gets the current selected profile
   * @returns {String} name of current profile
   */
  currentProfile: function() {
    return this._curr_profile;
  },

  clear: function() {
    window.removeEventListener('resize', this.resizeHandler);
  }

});

function resize() {
  if(this._container) {
    this.setSize();
  }
}

export default Layout;
