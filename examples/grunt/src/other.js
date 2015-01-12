function main(longish, arg, names) {
  if(longish) console.log(arg, names);

  function inside(longish, arg, names) {
    if(longish) console.log(arg, names);
  }
}
