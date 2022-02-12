<script>
let name;
let level;
let age ; 

// let listening = false;
// let speaking = false;
// let writting = false;

let skills = [];
let handleSubmit = () => {
    // console.log(name, level, age, listening, speaking, writting);
     console.log(name, level, age, skills);

}
</script>

<h3> Add a new Student </h3>
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <label> Level </label>
    <select bind:value={level}>
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="B1">B1</option>
        <option value="B2">B2</option>
        <option value="C1">C1</option>
        <option value="C2">C2</option>
    </select>

    <input type="number" placeholder="age" bind:value={age}>
    <label> Skills : </label>
   <!--
    <input type="checkbox"  bind:checked={listening}>Listenning <br>
    <input type="checkbox"  bind:checked={speaking}> Speaking <br>
    <input type="checkbox"  bind:checked={writting}> Writing <br>  -->

    <input type="checkbox"  bind:group={skills} value="fighting">Listenning <br>
    <input type="checkbox"  bind:group={skills} value="sneaking"> Speaking <br>
    <input type="checkbox"  bind:group={skills} value="running"> Writing <br>

    <button> Add a Student</button>
</form>

<style>

</style>