
<template>
  <div class="overlay">
    <span class="loading loading-spinner loading-xl"></span>
  </div>
</template>

<style>
.overlay {
  position: fixed !important;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999 !important;
}
</style>
