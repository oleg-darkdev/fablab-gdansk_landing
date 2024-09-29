<script>
  import {services, workshops, equipment, fablab} from '$shared';
</script>

<section class="page-padding our-players">
  <div class="our-players-details">

    <div class="our-players-details-column">
      <h3 class="heading-xxsmall color-text-one margin-bottom-large padding-top-medium border-top-1 uppercase">Nasze usługi</h3>

      {#each services as service }
        <p class="text-secondary">
          {service.title}
        </p>
      {/each}
    </div>

    <div class="our-players-details-column">
      <h3 class="heading-xxsmall color-text-one margin-bottom-large padding-top-medium border-top-1 uppercase">OFERTA WARSZTATOWA</h3>

      {#each workshops as workshop }
        <p class="text-secondary">
          {workshop.title}
        </p>
      {/each}
    </div>


    <div class="our-players-details-column">
      <h3 class="heading-xxsmall color-text-one margin-bottom-large padding-top-medium border-top-1 uppercase">W naszej pracowni</h3>
      {#each fablab as fab }
        <p class="text-secondary">
          {fab.title}
        </p>
      {/each}
    </div>

    <div class="our-players-details-column">
      <h3 class="heading-xxsmall color-text-one margin-bottom-large padding-top-medium border-top-1 uppercase">Wyposażenie</h3>
      {#each equipment as eqip }
        <p class="text-secondary">
          {eqip.title}
        </p>
      {/each}
    </div>


  </div>
</section>


<style>

</style>
