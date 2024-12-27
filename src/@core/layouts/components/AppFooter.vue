<template>
  <p class="clearfix mb-0">
    <span class="d-flex justify-content-between align-items-baseline w-100 mt-25">
      <span>
        SAKARYA UYGULAMALI BİLİMLER ÜNİVERSİTESİ © {{ new Date().getFullYear() }}
        <span class="d-none d-sm-inline-block">- Base</span>
      </span>
      <b-button variant="primary" to="/contact" class="mt-0">İletişim</b-button>
    </span>
  </p>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink,
  },
}
</script>

<style scoped>
.clearfix {
  clear: both;
}

.mb-0 {
  margin-bottom: 0;
}

.mt-25 {
  margin-top: 25px;
}

.d-flex {
  display: flex;
}

.justify-content-between {
  justify-content: space-between;
}

.align-items-baseline {
  align-items: baseline; /* Butonu yazıyla aynı hizada tutar */
}

.w-100 {
  width: 100%;
}

.d-none {
  display: none;
}

.d-sm-inline-block {
  display: inline-block;
}

@media (max-width: 576px) {
  .d-none {
    display: inline-block;
  }
}

.mt-0 {
  margin-top: 0; /* Butonun üst boşluğunu sıfırlar */
}
</style>
