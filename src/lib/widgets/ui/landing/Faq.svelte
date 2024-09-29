<script>
  import {faq} from '$shared';
</script>

<section class="page-padding mt-20">

    <a name="faq"></a>

    <div class="our-players-intro margin-bottom-xxxlarge">
    <!-- <div class="our-players-graphics-wrapper four">
      <img src="images/621eb9964b3ed954158179ac_Group%20115-min.png" loading="lazy" alt="">
    </div> -->



    <div class="faq-wrapper our-players-intro-title-container padding-right-xlarge">
      <div class="our-players-title-container">
        <h2 class="heading-xxlarge">F.A.Q.</h2>
        <div  class="our-players-graphics-wrapper three tablet-hide">
          <img src="images/621eb9964b3ed9c2658179aa_Group%20112-min.png" loading="lazy" alt="">
        </div>
        <div  class="our-players-graphics-wrapper two">
          <img src="images/621eb9964b3ed9d5db8179ab_Group%20114-min.png" loading="lazy" alt="" class="our-players-graphic-image">
        </div>
        <div  class="our-players-graphics-wrapper one">
          <img src="images/621eb9964b3ed92d8e8179a9_Group%20113-min.png" loading="lazy" alt="">
        </div>
      </div>
    </div>
    <div class="our-players-intro-text">
      <p class="text-secondary margin-bottom-large tablet-margin-bottom-medium">
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, rediving essentially unchanged.
      </p>
      <div class="our-players-text-button">
        <div class="text-cta color-text-one hiring margin-bottom-small">Lorem Ipsum has!!</div>
        <a rel="noreferrer" href="/" target="_blank" class="button outline w-inline-block">
          <div class="button-container">
            <div class="button-text color-text-four">Get in touch!</div>
            <img src="images/621eb9964b3ed9b70c817990_arrow%20%283%29-min.svg" loading="lazy" alt="" class="button-arrow-icon">
          </div>
        </a>
      </div>
    </div>
  </div>

    <div  class="background-shape-top">
      <img src="images/621eb9964b3ed981fa8179af_dark-bg-shape-cut.svg" loading="lazy" alt="" class="background-image-light-shape">
    </div>
    <div class="page-wrapper overflow-hidden">
      <div class="relative">
        <div class="page-padding">
          <div class="container">

            <div class="faqs-list-wrapper position-relative z-10">
              <div class="faqs-list-container">
                {#each faq as {q, a}}
                  <div class="faqs-list-item margin-bottom-xlarge">
                    <h2 class="heading-xsmall color-text-one padding-bottom-small border-bottom-1-color-one margin-bottom-small">
                      {q}
                    </h2>
                    {#each a as answer}
                      <p class="text-secondary">
                        {answer}
                      </p>
                    {/each}
                  </div>
                {/each}
                <!-- <div class="faqs-list-item margin-bottom-xlarge">
                  <h2 class="heading-xsmall color-text-one padding-bottom-small border-bottom-1-color-one margin-bottom-small">CAN YOUR PLAYERS COME ABOARD? <br>
                  </h2>
                  <p class="text-secondary">We will narrow down all of your preferences to help you quickly build the right team with Maestro&amp;Co. <br>
                    <br>Timezone preference <br>Skills &amp; experience <br>Availability dates <br>Personality &amp; culture fit <br>Budget preference <br>Industry expertise
                  </p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


<style>
  .faq-wrapper {
    -ms-grid-row: span 1;
    grid-row-start: span 1;
    -ms-grid-row-span: 1;
    grid-row-end: span 1;
    -ms-grid-column: span 3;
    grid-column-start: span 3;
    -ms-grid-column-span: 3;
    grid-column-end: span 3
  }

  @media screen and (max-width:991px) {
    .faq-wrapper {
      -ms-grid-column: span 1;
      grid-column-start: span 1;
      -ms-grid-column-span: 1;
      grid-column-end: span 1
    }
  }
</style>
