<script>
let showModal = true; 
let isOpen = true;
</script>

{#if showModal}
<div class="backdrop" class:open={isOpen}>
    <div class="modal-content">
        <p> Sign up for free </p>
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