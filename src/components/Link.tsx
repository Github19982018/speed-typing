import { ReactNode } from 'react'


const Link = (
    { className, href, children, state }:
    {
        className:string;
        href:string;
        children:ReactNode;
        state?:object;
    }) => {

    const onClick = (e) => {
        e.preventDefault();
        window.history.pushState(state || {}, "", href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
  return (
    <a className={className} href={href} onClick={(e) => onClick(e)}>
      {children}
    </a>
  );
};

export default Link;