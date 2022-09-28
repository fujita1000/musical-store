import { SocialIcon } from 'react-social-icons';
import style from './Footer.module.scss';
import Image from 'next/image';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer {...footerProps} className={` ${className}`}>
      <div className={style.container}>
        <div className={style.flex}>
          <div className={style.f_left}>
            <div className={style.f_nav}>
              <div className={style.f_navItem}>HOME</div>
              <div className={style.f_navItem}>当店について</div>
              <div className={style.f_navItem}>販売中の製品</div>
              <div className={style.f_navItem}>お知らせ</div>
              <div className={style.f_navItem}>お問い合わせ</div>
              <div className={style.f_navItem}>アクセス</div>
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
              <SocialIcon
                url="https://twitter.com/jaketrent"
                className={style.snsIcon}
              />
              <SocialIcon
                url="https://facebook.com/jaketrent"
                className={style.snsIcon}
              />
              <SocialIcon
                url="https://tiktok.com/jaketrent"
                className={style.snsIcon}
              />
              <SocialIcon
                url="https://twitch.com/jaketrent"
                className={style.snsIcon}
              />
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
