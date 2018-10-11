<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
