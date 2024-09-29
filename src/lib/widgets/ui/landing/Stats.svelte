
<script>
  import {stats} from '$shared';
</script>

<section class="working-globally margin-bottom-xxxlarge">
  <div class="working-globally-grid">
    <div class="working-globally-text">
      <div class="working-globally-title margin-bottom-small">
        <h2 class="heading-large color-text-two uppercase">
          Lorem
          <br>
          Ipsum is.
        </h2>
      </div>
      <div class="working-globally-text">
        <p class="text-secondary color-text-two">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
    </div>
    <div class="working-globally-numbers">
      {#each stats as stat}
      <div class="working-globally-number-wrapper">
        <div class="working-globally-number-image-wrapper margin-bottom-medium">
          <img src="images/621eb9964b3ed97b268179a0_Group%2090-min.svg" loading="lazy" alt="Number 5">
        </div>
        <div class="working-globally-title">Lorem Ipsum is</div>
      </div>
      {/each}
    </div>
  </div>
  <div  class="working-globally-offset-background"></div>
</section>

<style>

</style>
