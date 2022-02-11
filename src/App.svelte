<script>
	let firstname="Cire"  ;
	let level = "A1" ;
	let lastname ="Guisse"

;	// Handle click that changes the level 
	const handleClick = () => {
		level = 'A2';
	}
	// handle the levels One way binding and two binding  by adding the value of the variable in the input 
	const handleInput = (e) => {
		level = e.target.value;
	}
$: fullname = `${firstname} ${lastname}`;

</script>

<main>
	<h1>Erlösung {fullname}! ==> Hello {fullname}</h1>
	<p> Your current german level is { level } ==> Ihr aktuelles Deutschniveau ist { level }</p>
	<!-- Eevnt Handler with a button > -->
	<!--<button on:click={handleClick}> Pass to the next level ==> Pass zum nächsten Level </button>-->
	<!--One way binding and two binding  by adding the value of the variable in the input-->
	<!--<input type="text" on:input={handleInput} value={level}>-->
	<input type="text" bind:value={firstname}>
	<input type="text" bind:value={lastname}>
	<input type="text" bind:value={level}>


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