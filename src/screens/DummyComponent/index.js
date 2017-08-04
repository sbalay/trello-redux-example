import React from 'react';
import { Link } from 'react-router-dom';

import styles from './DummyComponent.styles';

function DummyComponent() {
  return (
    <Link to="/">
      <button style={styles.base}>Go back</button>
    </Link>
  );
}

export default DummyComponent;
