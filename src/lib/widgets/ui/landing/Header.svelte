<script>
    import {navigation} from '$shared';
</script>

<header class="navbar-wrapper pages w-nav" role="banner">
  <div class="page-padding">
    <div class="container">
      <div class="nav-bar-wrapper">
        <a href="/" aria-current="page" class="nav-bar-logo w-nav-brand w--current">
          <img src="images/light-logo.svg" loading="lazy" alt="fablab light logo">
        </a>
        <nav role="navigation" class="nav-bar-links padding-left-large padding-right-large tablet-padding-left-large tablet-padding-right-large mobile-padding-left-medium mobile-padding-right-medium w-nav-menu">
          <div class="nav-bar-links-mobile-center">
            <div class="nav-bar-link-mobile-top">
              <div class="nav-menu-column-one">
                {#each navigation.slice(0, 1) as {title, link}}
                  <a href="{link}" class="navbar-links-wrapper margin-right-medium tablet-padding-left-zero tablet-margin-left-large w-nav-link">{title}</a>
                {/each}
                <div class="nav-menu-column-one-mobile-divider"></div>
              </div>
              <div class="nav-menu-column-two">
                {#each navigation.slice(1, navigation.length) as {title, link}}
                  <a href="{link}" class="navbar-links-wrapper margin-right-medium tablet-padding-left-zero tablet-margin-left-large w-nav-link">{title}</a>
                {/each}
              </div>
            </div>
            <!-- <div class="nav-menu-mobile-button">
              <div class="nav-bar-button">
                <a href="/" class="button mobile-menu w-inline-block">
                  <div class="button-container">
                    <div class="button-text margin-right-small">Start here <br>
                    </div>
                    <img src="images/621eb9964b3ed94ec781798e_arrow-min.svg" loading="lazy" alt="" class="button-absolute-icon">
                  </div>
                </a>
              </div>
              <div class="nav-menu-credit">
                <span class="copyright-year">1040</span> © All rights reserved. MAESTRO&amp;CO.®
              </div>
            </div> -->
          </div>
        </nav>
        <div id="w-node-a3de75ad-89a2-a380-ecf7-10c5d649cc93-e4109b85" class="nav-bar-button tablet-hide">
          <a href="/start" class="button w-inline-block">
            <div class="button-container">
              <div class="button-text margin-right-small">Start here <br>
              </div>
              <img src="images/621eb9964b3ed94ec781798e_arrow-min.svg" loading="lazy" alt="">
            </div>
          </a>
        </div>
        <div class="hamburger-menu w-nav-button">
          <div class="mobile-menu-icon-container">
            <div class="mobile-menu-icon-top"></div>
            <div class="mobile-menu-icon-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
