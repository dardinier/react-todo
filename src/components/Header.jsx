import React, { useEffect, useRef } from 'react';
import { MDCTopAppBar } from '@material/top-app-bar/index';

const Header = () => {
  const topAppBar = useRef();

  useEffect(() => {
    MDCTopAppBar.attachTo(topAppBar.current);
  });

  return (
    <header className="mdc-top-app-bar" ref={topAppBar}>
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <span className="mdc-top-app-bar__title">React Todo</span>
        </section>
      </div>
    </header>
  );
};
export default Header;
