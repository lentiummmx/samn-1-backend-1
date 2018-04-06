/**
 * redis-catalogs hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */
const schedule = require('node-schedule');

module.exports = function defineRedisCatalogsHook(sails) {

  return {

    /**
     * Runs when a Sails app loads/lifts.
     *
     * @param {Function} done
     */
    initialize: function (done) {

      sails.log.info('Initializing custom hook (`redis-catalogs`)');

      const j = schedule.scheduleJob('*/5 * * * *', function (fireDate) {
        sails.log.debug('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
      });

      // Be sure and call `done()` when finished!
      // (Pass in Error as the first argument if something goes wrong to cause Sails
      //  to stop loading other hooks and give up.)
      return done();

    }

  };

};
