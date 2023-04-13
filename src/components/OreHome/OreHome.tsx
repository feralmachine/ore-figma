import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './OreHome.module.css';

interface Props {
  className?: string;
}
/* @figmaId 9:36 */
export const OreHome: FC<Props> = memo(function OreHome(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.navbarLogoLeft}>
        <div className={classes.navbarContainer}>
          <div className={classes.navbarContent}>
            <div className={classes.navbarBrand}>
              <div className={classes.logo}></div>
            </div>
            <div className={classes.navbarMenu}>
              <div className={classes.navbarLink}>
                <div className={classes.cOLLECTION}>COLLECTION</div>
              </div>
              <div className={classes.navbarLink2}>
                <div className={classes.aBOUT}>ABOUT</div>
              </div>
              <div className={classes.navbarLink3}>
                <div className={classes.cART}>CART (0)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mainContent}>
        <div className={classes.imageCarousel}>
          <div className={classes._landSplash21}></div>
        </div>
      </div>
      <div className={classes.footerSection}>
        <div className={classes.footerContainer}>
          <div className={classes.columns}>
            <div className={classes.column}>
              <div className={classes.logoWrapper}>
                <div className={classes.logo2}></div>
              </div>
            </div>
            <div className={classes.smallColumns}>
              <div className={classes.column2}>
                <div className={classes.content}>
                  <div className={classes.sTORE}>STORE</div>
                  <div className={classes.footerLinks}>
                    <div className={classes.link}>Collection</div>
                    <div className={classes.link2}>Shipping</div>
                    <div className={classes.link3}>Returns</div>
                  </div>
                </div>
              </div>
              <div className={classes.column3}>
                <div className={classes.content2}>
                  <div className={classes.aBOUT2}>ABOUT</div>
                  <div className={classes.footerLinks2}>
                    <div className={classes.link4}>Terms &amp; Conditions</div>
                    <div className={classes.link5}>Privacy Policy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.copyright}>
            <div className={classes.text}>Copyright © 2023 Ore Studios</div>
          </div>
        </div>
      </div>
    </div>
  );
});
