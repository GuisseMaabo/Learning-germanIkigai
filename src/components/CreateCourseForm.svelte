<script>
    import Button from  '../shared/Button.svelte';
    let fields = {course:'', listening:'', writing:''};
    const submitHandler = () => {
       // console.log(fields);
    }
</script>

<form   on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="course">Course Field: </label>
        <input type="text" id="field" bind:value={fields.course}>
    </div>
    <div class="form-field">
        <label for="listening">Listening: </label>
        <input type="text" id="listening" bind:value={fields.listening}>
    </div>
    <div class="form-field">
        <label for="writing"> Writing: </label>
        <input type="text" id="writing"  bind:value={fields.writing}>
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
</style>