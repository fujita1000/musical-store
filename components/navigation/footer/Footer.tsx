import { SocialIcon } from 'react-social-icons';
import style from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer {...footerProps} className={` ${className}`}>
      <div className={style.container}>
        <div className={style.flex}>
          <div className={style.f_left}>
            <div className={style.f_nav}>
              <Link href="#home">
                <a>
                  <div className={style.f_navItem}>HOME</div>
                </a>
              </Link>
              <Link href="#aboutme">
                <a>
                  <div className={style.f_navItem}>当店について</div>
                </a>
              </Link>
              <Link href="#lineup">
                <a>
                  <div className={style.f_navItem}>販売中の製品</div>
                </a>
              </Link>
              <Link href="#news">
                <a>
                  <div className={style.f_navItem}>お知らせ</div>
                </a>
              </Link>
              <Link href="#contact">
                <a>
                  <div className={style.f_navItem}>お問い合わせ</div>
                </a>
              </Link>
              <Link href="#access">
                <a>
                  <div className={style.f_navItem}>アクセス</div>
                </a>
              </Link>
            </div>
          </div>
          <div className={style.f_right}>
            <div className={style.f_logo}>
              <Image
                src={'/logo.png'}
                width={300}
                height={300}
                alt="logo"
              ></Image>
            </div>
            <div className={style.sns}>
              <SocialIcon url="https://twitter.com" className={style.snsIcon} />
              <SocialIcon
                url="https://facebook.com"
                className={style.snsIcon}
              />
              <SocialIcon url="https://tiktok.com" className={style.snsIcon} />
              <SocialIcon url="https://twitch.com" className={style.snsIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <p>Copyright © 2022 Nao fujita All Rights Reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
