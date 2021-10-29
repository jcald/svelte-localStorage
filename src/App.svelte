<script>
	export let name;
  import { TextInput, Card } from 'wind-svelte'; // mi librería de ui incompleta/no documentada pero ya publicada en npm :v
  import session from './stores/session';
</script>

<main>
	<h1>Hello {name}!</h1>
  <Card>
    <TextInput label="My field" bind:value={$session.myField} />
  </Card>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>