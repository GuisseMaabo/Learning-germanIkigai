<script>
import Header from './components/Header.svelte';
import Footer from './components/Footer.svelte';
import CreateCourseForm from './components/CreateCourseForm.svelte';

import Tabs from './shared/Tabs.svelte';






// Tabs 

let items = ['Current Courses', 'Participate to a course']
let activeItems = 'Current Courses';

const tabChange = (e)=> activeItems = e.detail;

</script>

<Header/>
<main>""
 <Tabs {activeItems} {items} on:tabChange={tabChange}/>
 {#if activeItems === 'Current Courses'}
	<p> courses list goes here </p>
 {:else if activeItems === 'Participate to a course'}
	<CreateCourseForm />
 {/if}
</main>
<Footer/>
<style>
	main {
		max-width: 960px;
		margin: 40px auto;
		
	}	
</style>