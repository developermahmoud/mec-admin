<template>
  <div>
    {{ $moment(new Date().now).format('LLLL') }}
  </div>
</template>

<script>
export default {
};
</script>
