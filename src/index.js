import _ from 'lodash'

function hello () {
  let element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack', 'It..~~~'], ' ')

  return element
}

document.getElementById('root').appendChild(hello())
