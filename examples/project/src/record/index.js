module.exports = exports = function(opts) {
  opts = opts || {};
  var el = opts.el;

  el.addEventListener("submit", submit);

  var user = el.find("input[name=user]");
  var linesOfCode = el.find("input[name=loc]");


  function submit(event) {
    event.preventDefault();
    var data = {};

    data.user = user.value;
    data.loc = parseInt(linesOfCode.value, 10);

    opts.pubSub.trigger("recorded", { record: data });

    el.reset();
  }
}
