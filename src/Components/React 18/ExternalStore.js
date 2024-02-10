import React from 'react'
import {useSyncExternalStore} from 'react';

function ExternalStore() {
    const subs = (listener) => {
        console.log(listener)
        window.addEventListener("resize", listener);
        return () => {
          window.removeEventListener("resize", listener);
        };
      };
      const getSnaps = () => {
        return window.innerWidth;
      };
      const todo = useSyncExternalStore(subs, getSnaps);
      return (
        <>
          <div>{todo}</div>
        </>
      );
}

export default ExternalStore