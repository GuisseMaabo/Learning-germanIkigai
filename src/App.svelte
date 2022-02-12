<script>
	import Modal from	'./Modal.svelte';
	 let students = [
		 {name: "yoshi", level:"A1", age:"20"},
		 {name: "kyohei", level:"A2", age:"17"},
		 {name: "yuri", level:"A1", age:"19"},

	 ]; 
	 const handleClick = (name) => {
		 // Delete the student from the list
		 students = students.filter((student) => student.name != name)
		 // console.log(name);
	 }

	 let showModal	 = false;
	 let toggleModal = () =>{
		 showModal = !showModal;
	 }; 

</script>
<Modal  {showModal} on:click={toggleModal}>
	<h3> Add a new Student </h3>
	<form>
		<input type="text" placeholder="name">
		<input type="text" placeholder="level">
		<button>Add a student </button>
	</form>
</Modal>	
<main>
	<button on:click|once={toggleModal}>Open Modal</button>
	{#each students as student}
	<div>
		<h3>{student.name}</h3>
		{#if student.level === "A1"}
		<h4>Keep the work up {student.name}</h4>
		{/if}
		<p>{student.age} years old, {student.level} level </p>  
		<button on:click= {() => handleClick( student.name)}> delete </button>
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