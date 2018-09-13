import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './Breadcrumb.css'

const Breadcrumb = ({ path }) => {
  let pathTo = '';
  return (
    <nav className='comp-breadcrumb'>
      <ol>
        {_.split(path, '/').slice(1).map((entry) => {
          pathTo = `${pathTo}/${entry}`;
          return (
            <li key={pathTo}>
              <Link to={pathTo}>
                &#9813; {entry}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
export default Breadcrumb;
