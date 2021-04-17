const React = require('react');
const reactDOM = require('react-dom');
import './styles/style.scss';

const App = () => {
  return (
    <h1>Hola</h1>
  )
}

reactDOM.render(<App />, document.getElementById('root'))