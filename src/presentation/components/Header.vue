
<template>
  <div class='navbar bg-base-100 shadow-sm w-[99.3%]'>
    <div class='flex-1'>
      <img :src='logo' class='w-[5vh] ml-[2vh]' alt='logo'/>
    </div>
    <div class='flex-none'>
      <button class="btn btn-soft btn-error mr-[2vh]">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-power-off-icon lucide-power-off"><path d="M18.36 6.64A9 9 0 0 1 20.77 15"/><path d="M6.16 6.16a9 9 0 1 0 12.68 12.68"/><path d="M12 2v4"/><path d="m2 2 20 20"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import logo from '../../assets/logo.png';
</script>
