/**
 * React Yeoul Test
 */

'use strict';

let React;
let ReactDOM;

describe('ReactYeoul', () => {
  beforeEach(() => {
    React = require('react');
    ReactDOM = require('react-dom');
  });

  it('works', () => {
    // function Button({children}) {
    //   return <button>{children}</button>;
    // }

    // function Dialog({children}) {
    //   return (
    //     <div>
    //       <div>
    //         <div />
    //         <p>Hello</p>
    //         {children}
    //       </div>
    //     </div>
    //   );
    // }

    function App() {
      return (
        <React.YeoulMode>
          <div>HI! Yeoul Mode!</div>
        </React.YeoulMode>
      );
    }
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);

    expect(container.innerHTML).toBe('<div></div>');
  });
});
