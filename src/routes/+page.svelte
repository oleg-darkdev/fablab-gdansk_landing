<script>
	// import {  } from '$lib/shared';
	import { About, Faq, Stats, Header, PreFooter, Free_2, Footer, HeroAbout } from '$lib/widgets';
  import { Cookies } from '$lib/entities'
</script>


<svelte:head>
  <title>FabLab Gdansk</title>
</svelte:head>

<!-- <Header /> -->



        <!-- <section class="home-hero-wrapper">
          <div class="page-padding">
            <div class="container">
              <div class="home-hero">
                <div class="home-hero-title">
                  <h1 class="heading-xxlarge">THE SHOW MUST GO ON, </h1>
                  <div class="home-hero-title-words margin-bottom-xxlarge">
                    <h1 data-w-id="dbcba53a-2a5a-3012-0ad8-34a89733a31c" class="first-word heading-xxlarge color-text-one position-absolute">FASTER.</h1>
                    <h1 data-w-id="389f2585-d0ed-14c0-46ee-eae123dfbd63" style="-webkit-transform:translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="title-words-changing heading-xxlarge color-text-one position-absolute">BETTER.</h1>
                    <h1 data-w-id="9a5d41eb-42ae-7276-ac1a-805ada7f672d" style="-webkit-transform:translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="title-words-changing heading-xxlarge color-text-one position-absolute">SMARTER.</h1>
                  </div>
                  <a href="/start" class="button hide portrait-show w-inline-block">
                    <div class="button-container">
                      <div class="button-text tablet">Start here <br>
                      </div>
                      <img src="images/621eb9964b3ed94ec781798e_arrow-min.svg" loading="lazy" alt="" class="button-arrow-icon">
                    </div>
                  </a>
                </div>
                <div class="home-hero-paragraph width-50 width-tablet-100 margin-bottom-xxlarge tablet-margin-bottom-none">
                  <p class="text-main">Do you think agencies are expensive, slow, and overstaffed? <br>
                    <br>Do you think talent marketplaces take too much time to find and hire the right talent? <br>
                    <br>Do you want a stress-free solution to scale your team anytime you want? <br>
                    <br>
                    <span class="text-main color-text-one">If you answered yes to all the above, then say hello to Maestro&amp;Co.® Our players. Your show.</span>
                    <br>
                  </p>
                </div>
                <div class="scroll-text-wrapper tablet-hide">
                  <div class="text-secondary margin-right-small">Scroll to learn more</div>
                  <div class="scroll-icon-wrapper">
                    <img src="images/621eb9964b3ed963a0817992_iconfinder_arrow-back_326518%20%281%29%201-min.svg" loading="lazy" alt="">
                  </div>
                </div>
                <div class="home-hero-image-wrapper">
                  <div data-w-id="c247f3cf-6468-77d9-c647-a074968bc6f7" class="home-hero-image-zoom"></div>
                </div>
              </div>
            </div>
          </div>
        </section> -->


        <!-- <section class="customers-wrapper">
          <div class="page-padding">
            <div class="container">
              <div class="customers margin-x-auto width-90 width-tablet-100">
                <div class="text-secondary text-align-center margin-bottom-large color-text _454545">OUR CUSTOMERS AND WORK ARE SEEN ON</div>
                <div class="customers-logos">
                  <div id="w-node-_4ad5563b-28b5-b4c7-e108-00a93461446b-7381797a" class="customer-logo-wrapper">
                    <img src="images/621eb9964b3ed927438179d2_logo-financial-times-min.svg" loading="lazy" alt="Financial Times logo" class="customer-logo__financial-times">
                  </div>
                  <div id="w-node-fbbe8552-10dd-2c4f-9343-77bda46b31e6-7381797a" class="customer-logo-wrapper">
                    <img src="images/621eb9964b3ed9736c8179d1_logo-forbes-min.svg" loading="lazy" alt="Forbes logo" class="customer-logo__forbes">
                  </div>
                  <div id="w-node-_55fd072c-004b-5bbc-1dfb-5af5988946ab-7381797a" class="customer-logo-wrapper">
                    <img src="images/621eb9964b3ed9033c8179d0_logo-techcrunch-min.svg" loading="lazy" alt="TechCrunch logo">
                  </div>
                  <div id="w-node-d8b82721-d1b9-b0db-98ec-559897290546-7381797a" class="customer-logo-wrapper">
                    <img src="images/621eb9964b3ed93c098179d4_logo-sundaytimes-min.svg" loading="lazy" alt="The Sunday Times logo">
                  </div>
                  <div id="w-node-a59e34fd-5317-a0e7-db3a-ec319b6da431-7381797a" class="customer-logo-wrapper">
                    <img src="images/621eb9964b3ed9ff388179cf_logo-cnbc-min.svg" loading="lazy" alt="CNBC logo" class="customer-logo__cnbc">
                  </div>
                  <div id="w-node-bac7e74b-4351-371a-cf8d-ff4db9fa147a-7381797a" class="customer-logo-wrapper">
                    <img src="images/621eb9964b3ed9029a8179d3_logo-mit-min.svg" loading="lazy" alt="MIT logo" class="customer-logo__mit">
                  </div>
                  <div id="w-node-_6c4f5e9f-6a05-5df5-dd06-d105940fef19-7381797a" class="customer-logo-wrapper">
                    <img src="images/621eb9964b3ed990d68179d6_logo-entrepreneur-min.svg" loading="lazy" alt="Entrepreneur logo">
                  </div>
                  <div id="w-node-dcc13843-e9df-4e61-a3f4-2626bcaf8a01-7381797a" class="customer-logo-wrapper">
                    <img src="images/621eb9964b3ed933ba8179d5_logo-angellist-min.svg" loading="lazy" alt="Angel List logo">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> -->


        <!-- <section class="home-about-wrapper">
          <div class="page-padding">
            <div class="container">
              <div class="we-are margin-bottom-super-super-large">
                <div id="w-node-_9abe268b-e8bd-a847-bc69-2fb4700defea-7381797a" class="we-are-column-one">
                  <div class="we-are-column-one-wrapper">
                    <div class="we-are-image-one-wrapper">
                      <div class="img-zoom-animation drop-shadow custom-mobile-animation">
                        <img src="images/621eb9964b3ed91fce81799d_Mask%20Group-min%20%281%29.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 90vw, (max-width: 1919px) 52vw, 806.3984375px" srcset="images/621eb9964b3ed91fce81799d_Mask%2520Group-min%2520%281%29-p-500.jpeg 500w, images/621eb9964b3ed91fce81799d_Mask%2520Group-min%2520%281%29-p-1080.jpeg 1080w, images/621eb9964b3ed91fce81799d_Mask%20Group-min%20%281%29.jpg 1544w" alt="" class="we-are-image-one dropdown image-zoom">
                      </div>
                    </div>
                    <div class="we-are-image-two-wrapper">
                      <div class="img-zoom-animation drop-shadow custom-mobile-animation">
                        <img src="images/621eb9964b3ed9bb3081799c_Mask%20Group%20%281%29-min.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 88vw, (max-width: 1919px) 50vw, 772px" srcset="images/621eb9964b3ed9bb3081799c_Mask%2520Group%2520%281%29-min-p-500.jpeg 500w, images/621eb9964b3ed9bb3081799c_Mask%2520Group%2520%281%29-min-p-1080.jpeg 1080w, images/621eb9964b3ed9bb3081799c_Mask%20Group%20%281%29-min.jpg 1544w" alt="" class="we-are-image-two drop-shadow image-zoom">
                      </div>
                    </div>
                    <div  class="we-are-circle-wrapper">
                      <img src="images/621eb9964b3ed9e1458179ae_Ellipse%20202-min.svg" loading="lazy" alt="" class="we-are-circle">
                    </div>
                  </div>
                </div>
                <div id="w-node-c0a269f7-665d-e309-9f28-eb0de5104b70-7381797a" class="we-are-column-two">
                  <h2 class="heading-medium margin-bottom-medium">We are a global collective of designers, technologists, creatives, and strategists.</h2>
                  <p class="text-secondary">Our tested methodology has helped deliver high-performance, on-demand and scalable teams in an agile and fast way from startups to global brands. <br>
                    <br>We are NOT a network of offices, but a network of hands-on talent. We specialize in bulletproofing your future - adding value from the first day, scaling up or down the team as needed and getting to market quickly with the right digital product/services. <br>
                  </p>
                </div>
                <div  class="home-about-graphics">
                  <img src="images/621eb9964b3ed9835f8179ad_Group%2071%20%281%29-min.svg" loading="lazy" alt="">
                </div>
              </div> -->



              <!-- <div id="how-we-do-it" class="how-we-do-that">
                <h2 class="heading-xxlarge margin-bottom-xxxlarge tablet-margin-bottom-xlarge">HOW WE <br>DO THAT? </h2>
                <div class="how-we-do-that-grid margin-bottom-super-super-large">
                  <div class="how-we-column-one">
                    <p class="heading-small">Think of A-Team, The Avengers, NBA All-Stars or We Are The World. When the best talent gathers together, the show is awesome. Yet they need somebody to manage the right players. That’s where Maestro comes in. <br>
                      <br>We can help you at any stage of your project by delivering a hand-picked team that will fit your budget, schedule and timezone. <br>
                      <br>To make sure your show never stops, you can choose one of the options: <br>
                    </p>
                  </div>
                  <div class="how-we-column-two">
                    <div class="how-we-reasons-wrapper margin-bottom-large tablet-margin-bottom-xlarge">
                      <div class="how-we-reasons-number margin-right-medium">
                        <div class="how-we-reasons-number-wrapper">
                          <div class="how-we-number text-align-center">1</div>
                        </div>
                      </div>
                      <div class="how-we-reasons-text">
                        <h1 class="heading-xsmall color-text-one margin-bottom-medium">THE POP-UP SHOW: <br>
                        </h1>
                        <p class="text-secondary margin-bottom-medium">Often your in-house resources are already stretched. We can accelerate the creation of your digital products, services, and brands by temporarily augmenting your team with skills and knowledge only possible by sourcing the best talent in the world. <br>
                        </p>
                        <a href="/start#start-form" class="button white w-inline-block">
                          <div class="button-container">
                            <div class="button-text color-text-two">SCALE YOUR TEAM</div>
                            <img src="images/621eb9964b3ed9168781798f_arrow%20%281%29-min.svg" loading="lazy" alt="" class="button-arrow-icon">
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="how-we-reasons-wrapper">
                      <div class="how-we-reasons-number margin-right-medium">
                        <div class="how-we-reasons-number-wrapper">
                          <div class="how-we-number text-align-center">2</div>
                        </div>
                      </div>
                      <div class="how-we-reasons-text">
                        <h1 class="heading-xsmall color-text-one margin-bottom-medium">THE FULL CONCERT: <br>
                        </h1>
                        <p class="text-secondary margin-bottom-medium">Just like a Maestro, we assemble a team of players with the right size, skills, and cost so we can help you across the full project lifecycle: Strategy - Design - Development - Growth. <br>
                        </p>
                        <a href="/start#start-form" class="button w-inline-block">
                          <div class="button-container">
                            <div class="button-text margin-right-small">GET YOUR TEAM</div>
                            <img src="images/621eb9964b3ed94ec781798e_arrow-min.svg" loading="lazy" alt="">
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->



          <!-- </div>
        </section> -->


<Stats />


<!-- <Free_2 /> -->

<!-- <HeroAbout /> -->

<About />

<Faq />

<PreFooter />

<Footer />

<!-- <Cookies /> -->


<!-- Custom CSS starts here -->
    <style>
      .body {
        overflow-x: hidden !important;
      }

      .home-about-wrapper {
        overflow-x: hidden !important;
      }

      /* Font Rendering Improvements */
      body {
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        -o-font-smoothing: antialiased;
      }

      /* Reset Default Form Style */
      .w-select {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
      }

      /* Update Default Selector Arrow Icon */
      .form-select-wrapper::before {
        background-image: url(images/613e9a5019fd8f3dc4d317f8_dropdown-icon.svg);
        background-size: 24px 24px;
        height: 24px;
        width: 24px;
        display: inline-block;
        content: "";
        position: absolute;
        right: 32px;
        top: 20px;
      }

      /* Reset iOS Input Default Style */
      .form-field {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      /* Set a Max-Width For Font-Size Above 1600px Viewport Width */
      @media screen and (min-width: 1600px) {
        .heading-xxlarge {
          font-size: 225px;
        }
      }

      /* Make Background Shape Non-Clickable */
      .background-shape-top {
        pointer-events: none;
      }

      /* Force Display Background Shape on Mobile */
      .background-shape-top {
        display: block !important;
      }

      @media screen and (max-width: 1440px) and (min-width: 992px) {
        .we-are-column-one {
          height: 53vw;
        }
      }

      @media screen and (max-width: 1239px) and (min-width: 992px) {
        .home-hero-paragraph {
          width: 45%;
        }
      }
    </style>
