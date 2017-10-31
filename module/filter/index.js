var flyd = require('../../lib');

/** @deprecated Module merged to the core and could be called as {stream.filter(fn)} too */
module.exports = flyd.curryN(2, function(fn, s) {
  return flyd.combine(function(s, self) {
    if (fn(s())) self(s.val);
  }, [s]);
});
