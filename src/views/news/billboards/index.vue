<template>
  <app-layout-page>
    <template slot="sideLeft">
      <app-layout-side-left>
        <h1>111</h1>
      </app-layout-side-left>
    </template>
    <template slot="sideRight">
      <app-layout-side-right>
        222
      </app-layout-side-right>
    </template>
    <h2>公告</h2>
    <router-link to="/news/billboards/12">详情</router-link><br>
  </app-layout-page>
</template>
