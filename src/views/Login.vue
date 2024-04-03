<script setup>
/**
 * Imports
*/
  import Button from '@/components/Button.vue'

/**
   * 
*/
  const introText = "Login to Apex"
  const email = "EMAIL"
  const password = "PASSWORD"
  const accountCreationText = "Don't have an Account?"
  const rememberMeText = "Keep me signed in on this device"
</script>

<template>
  <div class="grid md:grid-cols-2 grid-cols-1">
    <div class="bg-red-600 md:h-[100vh] h-[60vh]">Hi</div>

    <!-- Second grid -->
    <div>
      <div class="md:mt-52 mt-32 md:ml-[18%] ml-[10%]">
        <h1 class="text-5xl font-bold">{{ introText }}</h1>
        <p class="mt-4">{{ accountCreationText }}
          <span class="text-blue-600 font-medium">Sign up</span>
        </p>

        <form class="mt-8 w-[32rem]">
          <div class="flex flex-col">
            <label class="text-blue-600 text-xs font-medium mb-2">{{ email }}</label>
            <input required type="text" class="p-3 px-4 w-[100%] border-2 border-gray-300 rounded-md mb-4" placeholder="Enter your Email"/>
          </div>

          <div class="flex flex-col">
            <label class="text-blue-600 text-xs font-medium mb-2">{{ password }}</label>
            <input required type="text" class="p-3 px-4 mb-4 w-[100%] border-2 border-gray-300 rounded-md" placeholder="Enter your password"/>
          </div>

          <div class="flex flex-row justify-between">
            <div>
              <input type="checkbox"/>
              <label class="mx-2">{{ rememberMeText }}</label>
            </div>

            <p class="text-blue-600 font-medium">Forgot password?</p>
          </div>

          <Button title="Login"/>
        </form>
      </div>
    </div>
  </div>
</template>
