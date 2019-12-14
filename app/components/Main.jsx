var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      <div>
          <div>
            {props.children}
          </div>
      </div>
    </div>
  );
}

module.exports = Main;
