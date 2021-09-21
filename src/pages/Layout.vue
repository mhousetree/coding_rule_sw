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
      <li>
        <router-link to="/flex-or-grid">Flex or Grid</router-link>
      </li>
      <li>
        <router-link to="/float">Float</router-link>
        <ul>
          <li>
            <router-link :to="{ name: 'Float', hash: '#rules' }"
              >Rules</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Froat', hash: '#examples' }"
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
    <h2>クイックガイド</h2>
    <p>
      1軸方向(縦、横のどちらか)に要素を整列させたいとき<br />
      → <router-link to="/flex">Flex</router-link>
    </p>
    <p>
      2軸方向(縦横)に要素を配置したいとき<br />
      → <router-link to="/grid">Grid</router-link>
    </p>
    <p>
      テキストに画像を回り込ませたいとき<br />
      → <router-link to="/float">Float</router-link>
    </p>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: 'Layout',
}
</script>
