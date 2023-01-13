import style from './style.module.scss';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Image from "next/image";
import React from 'react';
import { GoogleMap, LoadScriptNext, GroundOverlay } from '@react-google-maps/api';
const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

const containerStyle = {
  width: '100%',
  height: '300px',
};
const center = {
  lat: 40.513103, // 緯度
  lng: 141.4897, // 経度
};
const bounds = {
  north: 40.52,
  south: 40.4942,
  east: 141.513105,
  west: 141.4666,
};

const Home= () => {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <div className={style.home} id="home">
          <div className={style.logo}>
            <Image src={'/logo.png'} width={180} height={180} alt="logo" />
          </div>
          <div className={style.top_word}>
            <h1>Sence of Pitch</h1>
            <h2>音楽機器専門店</h2>
            <p>
              業界最高水準の音楽機器を取り揃えております。
              <br />
              <br />
              頭を透き通るような最高の音楽体験をぜひご自身で体感してください。
              <br />
            </p>
            <div className={style.more_box}>
              <p>詳しく見る</p>
              <div className={style.free_image1}>
                <Image
                  src={'/free-img.png'}
                  width={600}
                  height={800}
                  alt="ヘッドホン"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={style.aboutme} id="aboutme">
          <div className={style.about_box}>
            <h2>ABOUT ME</h2>
            <h3>Sense of Pitchについて</h3>
            <p>
              Sense of
              pitchは2003年に設立され、全国に50万人以上の顧客を持つ音楽機器専門店です。
              <br />
              <br />
              ギター、ドラムキット、電子ピアノ、サックス、チェロなどのオーケストラ楽器からロックンロールまで、さらに主要なレコーディング機器やスタジオ機器まで、幅広い音楽ギアを取り扱っています。
              <br />
              <br />
              スターターギターからプロ用マイクやアンプまで、バイオリン、キーボード、電子ドラムキットなど、お探しのものがあれば、私たちにお任せください。
              <br />
              <br />
              楽器購入の際は、ぜひ当店をご利用ください。
            </p>
            <div className={style.more_box}>
              <p>詳しく見る</p>
            </div>
          </div>
        </div>

        <div className={style.lineup} id="lineup">
          <div className={style.lineup_con}>
            <h2>LINE UP</h2>
            <h3>販売中の製品</h3>
            <div className={style.line_grid}>
              <div className={style.image1}>
                <Image
                  src={'/image-1.jpg'}
                  height={300}
                  width={450}
                  alt="image-1"
                />
                <div className={style.line_p}>
                  <p>
                    RTX-800 Dreamアンプ <br />
                    ¥44,400(税込)
                  </p>
                </div>
              </div>
              <div className={style.image2}>
                <Image
                  src={'/image-2.jpg'}
                  height={500}
                  width={600}
                  alt="image-1"
                />
                <div className={style.line_p}>
                  <p>
                    Localeffect エレキギター BaseCamp <br />
                    ¥35,000(税込)
                  </p>
                </div>
              </div>
              <div className={style.image3}>
                <Image
                  src={'/image-3.jpg'}
                  height={300}
                  width={450}
                  alt="image-1"
                />
                <div className={style.line_p}>
                  <p>
                    Valovandle 2クラッシュシンバルパック / Vax制 ドラム <br />
                    ¥133,000(税込)
                  </p>
                </div>
              </div>
              <div className={style.image4}>
                <Image
                  src={'/image-6.jpg'}
                  height={300}
                  width={600}
                  alt="image-1"
                />
                <div className={style.line_p}>
                  <p>
                    bulePower エレキギター <br />
                    ¥35,000(税込)
                  </p>
                </div>
              </div>
              <div className={style.image5}>
                <Image
                  src={'/image-5.jpg'}
                  height={505}
                  width={450}
                  alt="image-1"
                />
                <div className={style.line_p}>
                  <p>
                    kazsat RT9000 <br />
                    ¥35,500(税込)
                  </p>
                </div>
              </div>
              <div className={style.more_box}>
                <p>詳しく見る</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.news} id="news">
          <div className={style.news_con}>
            <div className={style.news_img}>
              <Image
                src={'/free-img2.png'}
                width={600}
                height={400}
                alt="ギター"
              />
            </div>
            <h2>NEWS</h2>
            <h3>お知らせ</h3>
            <div className={style.news_contents}>
              <div className={style.news1}>
                <div className={style.news_border}>
                  <div className={style.news_main}></div>
                </div>
              </div>
              <div className={style.news2}>
                <div className={style.news_border}>
                  <div className={style.news_main}></div>
                </div>
              </div>
              <div className={style.news3}>
                <div className={style.news_border}>
                  <div className={style.news_main}></div>
                </div>
              </div>
              <div className={style.news4}>
                <div className={style.news_border}>
                  <div className={style.news_main}></div>
                </div>
              </div>
            </div>
            <div className={style.more_box}>
              <p>詳しく見る</p>
            </div>
          </div>
        </div>

        <div className={style.contact} id="contact">
          <div className={style.con_box1}></div>
          <div className={style.con_box2}></div>
          <div className={style.con_container}>
            <div className={style.con_document}>
              <div className={style.con_image1}>
                <Image src={'/human-1.jpg'} width={500} height={600} alt="人" />
              </div>
              <div className={style.con_image2}>
                <Image src={'/human-2.jpg'} width={500} height={600} alt="人" />
              </div>
              <div className={style.con_maru1}></div>
              <div className={style.con_maru2}></div>
              <div className={style.con_text}>
                <h2>CONTACT</h2>
                <h3>お問い合わせ</h3>
                <p>
                  いっしょに最高の楽器を探しましょう。
                  <br />
                  あなたに合う楽器がきっと見つかります。
                  <br />
                  また、気になる点があればお気軽にお問い合わせください
                  <br />
                </p>
                <div className={style.more_box}>
                  <p>お問い合わせはこちらから</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.access} id="access">
          <div  className={style.access_con}>
            <h2>ACCESS</h2>
            <h3>アクセス</h3>
          <LoadScriptNext googleMapsApiKey={key}>  
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
              // マップのスタイル
              options={{
                gestureHandling: 'greedy',
                streetViewControl: false,
                fullscreenControl: false,
              }}
            >
              <GroundOverlay
                key={'url'}
                url="載せたい画像のURL"
                bounds={bounds}
                opacity={0.5}
              />
            </GoogleMap>
          </LoadScriptNext>
        </div>    
         </div>
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
