const { parse } = require('./globals')

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  // Assume we are in the context of `window`
  this.alert('Hmmm, this probably isn\'t a great idea...');

  parse();

  return element;
}
  
document.body.appendChild(component());