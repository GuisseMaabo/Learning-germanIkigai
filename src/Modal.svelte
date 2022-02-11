<script>
    // stopPropagation - stop the event bubling or capturing any further 
    // capture - fires the handler during the capture phase not bubbling 
    // once - makes sure the event can only fire once (removes handler)
    // preventDefault - prevent the default action (run e.preventDefault))
    // self - only fires the event if the clicked element is the target 
export let showModal = false; 
export let isOpen = true;
export let message; 
</script>

{#if showModal}
<div class="backdrop" class:open={isOpen} on:click|self>
    <div class="modal-content">
        <p> { message }</p>
    </div>
</div>
{/if}
<style>
.backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.8);
}
.modal-content{
    padding: 10px;
    border-radius: 10px;
    max-width:400px;
    margin: 10% auto;
    text-align: center;
    background:white;
}

.open .modal-content {
    background: crimson;
    color:  white;
}
</style>