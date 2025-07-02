<script setup lang='ts'>
  import Button from '../../components/Button.vue';
  import Input from '../../components/Input.vue';
  import Select from '../../components/Select.vue';
</script>

<template>
  <div class='w-[100%] flex items-center justify-center py-[2vh]'>
    <fieldset class="flex flex-col items-center justify-center fieldset bg-base-200 border-base-300 rounded-box w-xs border py-[3vh] px-[5vh]">
      <h2>CREATE ACCOUNT</h2>
      <Input/>
      <Select/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <button class='btn btn-soft btn-accent btn-block'>
	Create account
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[1.5vh] mr-[.5vh] lucide lucide-user-round-plus-icon lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/></svg>
      </button> 
    </fieldset>
  </div>
</template>
