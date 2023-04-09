<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.from('.landing__title', { x: -200, rotate: '5deg', opacity: 0, duration: 0.6 });
	});
</script>

<div class="landing">
	<section class="landing__section">
		<h1 class="landing__title">
			<strong>Hi,</strong> <br />
			I'm <strong><span class="landing__title landing__title--blue">Sk</span>ame,</strong><br />
			<strong>Web</strong> developer
		</h1>
	</section>
</div>

<style lang="scss">
	.landing {
		background-color: $black;
		font-size: 40px;
		width: 100vw;
		min-height: 100vh;

		&__section {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100vh;
		}

		&__title {
			color: $white;
			font-style: italic;

			&--blue {
				color: $blue;
			}
		}
	}
</style>
