import React from 'react';

import ReactDOM from 'react-dom';

import './style.css';
function Contact() {
  return (
    <div>
      <h3> nom </h3>
      <h4>
        ð§nom.prenom@email.com
        <br />
        ð phoneNumber
      </h4>

      <button>delete</button>
    </div>
  );
}
export const App = (
  <div>
    <h1 className="text-center">My contacts list ð±</h1>
    <Contact />
    <Contact />
    <Contact />
    <Contact />
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
