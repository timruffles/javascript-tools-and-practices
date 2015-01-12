module.exports = exports = function(opts) {
  opts = opts || {};
  var el = opts.el;
  var items = opts.items.slice();

  render(items);

  opts.pubSub.on("recorder", function(item) {
    opts.items.push(item);
    render();
  });

  function render(items) {
  }
}

function row(item) {
}
