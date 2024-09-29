<script>
  import {social} from '$shared';
</script>

<footer class="footer-wrapper dark">
  <div class="page-padding">
    <div class="container">

      <a name="contact"></a>
      <div class="footer">
        <div class="footer-cta  margin-bottom-super-super-large tablet-text-align-center">
          <div class="footer-cta-title ">
            <h2 class="heading-xxlarge ">KONTAKT?</h2>
          </div>
          <div class="footer-cta-info">
            <p class="text-secondary margin-bottom-medium">
              ul. Grunwaldzka 609A, 80-337 Gdańsk
            </p>
            <p class="text-secondary margin-bottom-medium">
              Tel: 881 222 583
            </p>
            <p class="text-secondary margin-bottom-medium">
              email: biuro@sflg.pl
            </p>
            <!-- <a href="/" class="button white width-mobile-100 w-inline-block">
              <div class="button-container">
                <div class="button-text margin-right-small color-text-two">Get in Touch</div>
                <img src="/images/621eb9964b3ed9168781798f_arrow%20%281%29-min.svg" loading="lazy" alt="">
              </div>
            </a> -->
            <!-- <div class="footer-info padding-bottom-xxlarge portrait-padding-bottom-medium"> -->
              <div class="footer-info-socials">
                {#each social as {link, icon, title}}
                <a href="{link}" target="_blank" class="footer-social-icon-wrapper margin-right-small w-inline-block">
                  <img src="{icon}" loading="lazy" alt="{title} icon">
                </a>
                {/each}
              </div>
            <!-- </div> -->
          </div>
        </div>

      </div>
    </div>
  </div>
  <div  class="footer-graphic-bg"></div>
</footer>


<style>

.footer-cta {
	display: -ms-grid;
	display: grid;
	-webkit-box-align: end;
	-webkit-align-items: end;
	-ms-flex-align: end;
	align-items: end;
	grid-auto-columns: 1fr;
	grid-column-gap: 80px;
	grid-row-gap: 16px;
	-ms-grid-columns: 3.5fr 3.25fr;
	grid-template-columns: 3.5fr 3.25fr;
	-ms-grid-rows: auto;
	grid-template-rows: auto
}

.footer-info {
	display: -ms-grid;
	display: grid;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	-ms-grid-columns: 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	-ms-grid-rows: auto;
	grid-template-rows: auto
}

.footer-cta-info {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: start;
	-webkit-align-items: flex-start;
	-ms-flex-align: start;
	align-items: flex-start
}

.footer-graphic {
	position: absolute;
	top: -35%;
	bottom: 0;
	z-index: -1;
	display: none;
	width: 110vw
}

.footer-info-rights {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center
}

.footer-social-icon-wrapper {
	border-bottom-style: none
}

.footer-social-icon-wrapper.margin-right-small.hide {
	display: none
}


@media screen and (max-width:991px) {
	.footer-cta {
		justify-items: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-ms-grid-columns: 3.5fr;
		grid-template-columns: 3.5fr;
    margin: 0 auto;
	}

	.footer-cta.margin-bottom-super-super-large.tablet-text-align-center {
		text-align: center
	}

	.footer-info {
		justify-items: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-ms-grid-columns: 1fr;
		grid-template-columns: 1fr
	}

	.footer-cta-info {
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center
	}

	.footer-graphic {
		width: 130vw;
		height: 100%
	}

	.footer-graphic.tablet-hide {
		display: none
	}
}
</style>
