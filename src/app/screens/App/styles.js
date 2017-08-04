import React from 'react';
import Radium, { Style } from 'radium';

const spinKeyframes = Radium.keyframes(
  {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },
  'spin'
);

export default {
  base: {
    textAlign: 'center'
  },
  logo: {
    animation: 'spin infinite 20s linear',
    animationName: spinKeyframes,
    height: 80
  },
  header: {
    backgroundColor: '#222',
    height: 150,
    padding: 20,
    color: 'white'
  }
};

export const BaseStyles = (
  <Style
    rules={{
      body: {
        margin: 0,
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
      }
    }}
  />
);
