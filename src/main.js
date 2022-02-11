import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Cire',
		level: 'A1',
		
	}
});

export default app;