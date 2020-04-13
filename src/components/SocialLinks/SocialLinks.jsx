import React from 'react';

const Li = props => <li>{props.children}</li>;
export const PotatoBeans = () => (
  <div>
    <div>
      <p>Hello</p>
    </div>
    <ul>
      <Li> Never</Li>
      <Li color={'red'}>gonna</Li>
      <Li>let</Li>
      <Li highlight>you</Li>
      <Li>down</Li>
    </ul>
  </div>
);

const A = () => {
  const touchThis = 'awww';

  const B = () => {
    const cantTouchThis = "can't touch this";

    console.log(`${touchThis} ${cantTouchThis}`); // awww can't touch this
  };

  console.log(cantTouchThis); // Error
};
