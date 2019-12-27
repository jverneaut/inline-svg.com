<script>
  import { notifications, notify } from '../store';
</script>

<div class="notifications">
  {#each $notifications as notification}
    {#if notification.show}
      <h2>{notification.message}</h2>
    {/if}
  {/each}
</div>

<button on:click={() => notify('Test')}>Notify</button>
