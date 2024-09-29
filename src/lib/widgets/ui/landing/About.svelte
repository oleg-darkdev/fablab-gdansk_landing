
<script>
  import {timeline} from '$shared';
</script>



<section>
  <div class="real-values-wrapper">
    <div class="page-padding">
      <div class="container">

        <div class="real-values">
          <h2 class="heading-xxlarge margin-bottom-xlarge">Historia FabLabu</h2>
            <p class="text-secondary">
              Czy wiesz, że nasza pracownia FabLab Gdańsk działa już od 2017 roku, a samo Stowarzyszenie Fablab Gdańsk powstało w 2018 roku?
              <span class="color-text-one ">Poznaj naszą historie i dowiedz się co się u Nas działo!</span>
            </p>
          {#each timeline as {title, desc}}
          <div class="values-info-wrapper">
            <div class="values-info padding-top-medium margin-bottom-xlarge">
              <h3 class="heading-xsmall color-text-one">{title}</h3>
              <div class='width-80 width-tablet-100'>
                {#each desc as description}
                <p class="text-secondary my-4">
                  {description}
                </p>
              {/each}
            </div>
            </div>
          </div>
           {/each}
          <div class="real-values-image-wrapper-tablet"></div>
        </div>
      </div>
    </div>
  </div>
</section>



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
        background-image: url(/images/613e9a5019fd8f3dc4d317f8_dropdown-icon.svg);
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
    </style>
