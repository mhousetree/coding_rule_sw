<template>
  <div class="layout">
    <h1>Layout</h1>
    <h2>目次</h2>
    <ul>
      <li>
        <router-link to="/flex">Flex</router-link>
        <ul>
          <li>
            <router-link :to="{ name: 'Flex', hash: '#rules' }"
              >Rules</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Flex', hash: '#examples' }"
              >Examples</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/grid">Grid</router-link>
        <ul>
          <li>
            <router-link :to="{ name: 'Grid', hash: '#rules' }"
              >Rules</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Grid', hash: '#examples' }"
              >Examples</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2>概要</h2>
    <p>
      この章では、ウェブサイト全体を構成するためのレイアウトについて学習します。
    </p>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: 'Layout',
}
</script>
