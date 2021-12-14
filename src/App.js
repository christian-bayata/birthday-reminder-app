import React, {Fragment, useState} from 'react';
import {data} from './data.js';
import './index.css';

function App() {
  let [celebrants, setCelebrants] = useState(data);

  const handleClick = () => {
    setCelebrants([]);
  };

  return (
    <Fragment>
      <section className="card-body">
        <div className="birthday-card">
            <h3 className="py-3 px-2 info">5 Birthdays Today</h3>
                {celebrants.map((celebrant) => {
                  let {name, age, image} = celebrant;
              return (
                <div className="row py-3 px-3 content">
                    <div className="col-2">
                      <img src={image} 
                      alt="celebrant" 
                      />
                    </div>
                    <div className="col-5 px-4">
                        <h3 className="celebrant-name">{name}</h3>
                        <h4 className="celebrant-age">{age} </h4>
                    </div>
                </div>
              )
                })}
            <button className="clear-button" onClick={handleClick}>
                <h5>Clear Items</h5>
            </button>
            </div>

      </section>
    </Fragment>
  );
}

export default App;
