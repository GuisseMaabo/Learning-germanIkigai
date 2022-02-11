<script>
	 let students = [
		 {name: "yoshi", level:"A1", age:"20"},
		 {name: "kyohei", level:"A2", age:"17"},
		 {name: "yuri", level:"A1", age:"19"},

	 ]; 

</script>

<main>
	{#each students as student}
	<div>
		<h3>{student.name}</h3>
		<p>{student.age} years old, {student.level} level </p>  
	</div>
	{:else} 
	<p>No student subscribed yet </p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}



	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>