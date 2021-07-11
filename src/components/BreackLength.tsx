import React from 'react';
import { useSelector } from 'react-redux';

export const BreackLength = () => {
  const { BreackLength } = useSelector(({timer}:AppState) => timer)
  return (
    <div>
      <h4>Breack Length</h4>
      <div className="interval-container">
        <i className="icofont-caret-left arrow"></i>
        <p className="interval-length"> {BreackLength} </p>
        <i className="icofont-caret-right arrow"></i>
      </div>
    </div>
  );
}