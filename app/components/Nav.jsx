const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
  render: function() {
    return(
      <nav className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Timer App</li>
              <li>
                  <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
              </li>
              <li>
                <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</IndexLink>
              </li>
            </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="">Andrew Mead</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;

// Alternative, stateless component
/*
var Nav = () => {
  ...
};
*/
