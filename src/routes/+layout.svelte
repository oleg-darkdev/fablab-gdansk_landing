<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
</script>

<div class="dark-body">
  <div class="page-wrapper overflow-hidden">
    <main class="main-wrapper">
      <slot />
    </main>
  </div>
</div>

<style>
</style>


