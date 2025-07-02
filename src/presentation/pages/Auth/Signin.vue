<script setup lang='ts'>
  import Button from '../../components/Button.vue';
  import Input from '../../components/Input.vue';
  import Select from '../../components/Select.vue';
</script>

<template>
  <div class='w-[100%] flex items-center justify-center py-[2vh]'>
    <fieldset class="flex flex-col items-center justify-center fieldset bg-base-200 border-base-300 rounded-box w-xs border py-[3vh] px-[5vh]">
      <h2>LOGIN</h2>
      <Input/>
      <Select/>
      <Input/>
      <a class="link link-hover">Forgot password?</a>
      <button class='btn btn-soft btn-accent btn-block'>
	Login
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in-icon lucide-log-in"><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></svg>	
      </button> 
    </fieldset>
  </div>
</template>
