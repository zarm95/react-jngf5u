import React from 'react';

import ReactDOM from 'react-dom';

import './style.css';
function Contact() {
  return (
    <div>
      <h3> nom </h3>
      <h4>
        📧nom.prenom@email.com
        <br />
        📞 phoneNumber
      </h4>

      <button>delete</button>
    </div>
  );
}
export const App = (
  <div>
    <h1 className="text-center">My contacts list 📱</h1>
    <Contact />
    <Contact />
    <Contact />
    <Contact />
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
