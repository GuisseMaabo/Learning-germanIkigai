<script>
    import Button from  '../shared/Button.svelte';
  


    let fields = {firstName:'', lastName:'',    course:'', listening:'', writing:''};
    let errors = {course: '', listening:'', writing: '' };
    let valid = false;
    /*
    let modules = [
		{ id: 1, text: `General Writing` },
		{ id: 2, text: `Academic Writing` },
        { id: 3, text: `General Listening` },
		{ id: 4, text: `Academic Listening` },
        { id: 5, text: `General Reading` },
		{ id: 6, text: `Academic Reading` },
		{ id: 7, text: `Speaking` },
	];
    */
    let levels = [
		{ id: 1, text: `A1` },
		{ id: 2, text: `A2` },
        { id: 3, text: `B1` },
		{ id: 4, text: `B2` },
        { id: 5, text: `C1` },
		{ id: 6, text: `C2` },
	];
    let selected; 
    let answer; 

    const submitHandler = () => {
        valid = true;
    // question
    if (fields.course.trim().length <  6) {
      valid = false;
      errors.course = 'Course must be German'
    } else {
      errors.course = ''
    }
    // answer A
    if (fields.listening.trim().toUpperCase() != 'listening' && fields.listening.trim().length < 1) {
      valid = false;
      errors.listening = 'course one  cannot be empty'
    } else {
      errors.listening = ''
    }
    // answer B
    if (fields.writing.trim().toUpperCase() != 'writing'  && fields.writing.trim().length < 1) {
      valid = false;
      errors.writing = 'Course two cannot be empty'
    } else {
      errors.writing= ''
    }
    // add new poll
    if (valid) {
      console.log('valid', fields);
    }
    alert(`your current level ${selected.id} (${selected.text}) with "${answer}"`)
    }
</script>

<form   on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="course">First Name: </label>
        <input type="text" id="field" bind:value={fields.firstName}>
    </div>
    <div class="form-field">
        <label for="course">Last Name: </label>
        <input type="text" id="field" bind:value={fields.lastName}>
    </div>
    <div class="form-field">
        <label for="course">    Your Current Level: </label>
        <select value={selected} on:change="{()=> answer = ''}">
            {#each levels as level}
                <option value={level}>
                    {level.text}
                </option>
            {/each}
        </select>
    </div>

    <div class="form-field">
        <label for="course">Course Field: </label>
        <input type="text" id="field" bind:value={fields.course}>
        <div class="error">{ errors.course }</div>
    </div>
    <div class="form-field">
        <label for="listening">Listening: </label>
        <input type="text" id="listening" bind:value={fields.listening}>
        <div class="error">{ errors.listening }</div>
    </div>
    <div class="form-field">
        <label for="writing"> Writing: </label>
        <input type="text" id="writing"  bind:value={fields.writing}>
        <div class="error">{ errors.writing }</div>
    </div>
    <Button>    Add a Course    </Button>
</form>
<style>
    form{
        width:400px;
        margin: 0 auto ;
        text-align:center;
    }
    .form-field{
        margin: 18px auto ;
    }
    input{
        width:100%;
        border-radius: 6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
    select{
        width:100%;
        border-radius: 6px;
    }
</style>