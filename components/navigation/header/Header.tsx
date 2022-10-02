import style from "./Header.module.scss";
import {gsap} from "gsap"
import { useEffect } from "react";
import Link from "next/link";

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  useEffect(() => {

    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.3 } });
    
    const nav = document.querySelector('#nav');
    const playButton = document.querySelector('#play');
    const reverseButton = document.querySelector('#reverse');
    const close = document.querySelector('#text');

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

    close.addEventListener('click', () => {
      tl.to(nav, { visibility: 'hidden' })
      .to(reverseButton, { visibility: 'hidden' }, '<')
      .to(playButton, { visibility: 'visible' }, '<');
      tl.play();
    })

 }, []);
  return (
    <header {...headerProps} className={`${className}`}>
      <div className={style.container}>
        <div className={style.nav} id="nav">
          <nav id="text">
            <ol>
              <Link href="#home">
                <a>
                  <li>HOME</li>
                </a>
              </Link>
              <Link href="#aboutme">
                <a>
                  <li>当店について</li>
                </a>
              </Link>
              <Link href="#lineup">
                <a>
                  <li>販売中の製品</li>
                </a>
              </Link>
              <Link href="#news">
                <a>
                  <li>お知らせ</li>
                </a>
              </Link>
              <Link href="#contact">
                <a>
                  <li>お問い合わせ</li>
                </a>
              </Link>
              <Link href="#access">
                <a>
                  <li>アクセス</li>
                </a>
              </Link>
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
