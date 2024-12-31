<template>
  <suspense>
    <router-view></router-view>
  </suspense>
</template>

<script setup></script>

<style scoped></style>

<style>
:root {
  --color-gold: #f8bf29;
  --color-silver: silver;
  --color-bronze: #d69872;
  --color-gold-dark: #c39824;
  --color-silver-dark: #adadad;
  --color-bronze-dark: #b77750;
}
.text-gold {
  color: var(--color-gold) !important;
}
.text-silver {
  color: var(--color-silver) !important;
}
.text-bronze {
  color: var(--color-bronze) !important;
}
.text-gold-dark {
  color: var(--color-gold-dark) !important;
}
.text-silver-dark {
  color: var(--color-silver-dark) !important;
}
.text-bronze-dark {
  color: var(--color-bronze-dark) !important;
}
</style>
