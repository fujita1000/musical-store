import style from "./Header.module.scss";
import {gsap} from "gsap"
import { useEffect } from "react";

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  useEffect(() => {

    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.3 } });
    
    const nav = document.querySelector('#nav');
    const playButton = document.querySelector('#play');
    const reverseButton = document.querySelector('#reverse');

  playButton.addEventListener('click', () => {
    tl.to(nav, { visibility: 'visible' })
      .to(reverseButton, { visibility: 'visible' }, '<')
      .to(playButton, { visibility: 'hidden' }, '<');
      tl.play();
    });

    reverseButton.addEventListener('click', () => {
    tl.to(nav, { visibility: 'hidden'})
      .to(reverseButton, { visibility: 'hidden' }, '<')
      .to(playButton, { visibility: 'visible' }, '<');
      tl.play();
    });

 }, []);
  return (
    <header {...headerProps} className={`${className}`}>
      <div className={style.container}>
        <div className={style.nav} id="nav">
          <nav>
            <ol>
              <li>HOME</li>
              <li>当店について</li>
              <li>販売中の製品</li>
              <li>お知らせ</li>
              <li>お問い合わせ</li>
              <li>アクセス</li>
            </ol>
          </nav>
        </div>
        <div className={style.navbar_con} id="play">
          <div className={style.navbar1}></div>
          <div className={style.navbar2}></div>
          <div className={style.navbar3}></div>
        </div>

        <div className={style.navbar_con2} id="reverse">
          <div className={style.navbar4}></div>
          <div className={style.navbar5}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
