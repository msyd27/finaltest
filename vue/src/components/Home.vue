<script setup>
import { format } from 'date-fns';

function getCurrentDateTime() {
  return format(new Date(), 'yyyy-MM-dd HH:mm:ss');
}
</script>

<template>

  <WelcomeItem>
    
    <h1 >Date/Time</h1>

    The current date and time is: {{getCurrentDateTime()}}
  </WelcomeItem>

  
</template>
