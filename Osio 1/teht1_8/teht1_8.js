'use strict';
function myFunc() {
  let target = document.querySelector('#target');
  let start = parseInt(prompt('Start year:'));
  let end = parseInt(prompt('End year:'));
  let list = '<ul>';
  for (let x = start; x <= end; x++)
  {
    if ((x % 4 == 0 && x % 100 != 0) || (x % 400 == 0))
    {
      list += '<li>';
      list += x;
      list += '</li>'
    }
        }
  list += '</ul>'

  target.innerHTML = list
}