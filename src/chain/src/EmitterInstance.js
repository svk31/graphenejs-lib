var ee = require("event-emitter");

var emitter;

module.exports = {
        emitter: function () {
        if ( !emitter ) {
            emitter = ee({});            
        }
        return emitter;
    }
}
