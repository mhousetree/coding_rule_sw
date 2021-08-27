<template>
  <div class="home">
    <h1>概要</h1>
    <p>こちらは社内統一コーディング(マークアップ)ルールのページです。</p>
    <h1>更新履歴</h1>
    <dl class="timetable">
      <dt>2021.08.27</dt>
      <dd>
        「<router-link to="/naming">命名則</router-link
        >」の一部修正、シンタックスハイライトの導入、スタイル調整(ieki)
      </dd>
      <dt>2021.08.24</dt>
      <dd>
        「<router-link to="/proposal">提案事項</router-link>」「<router-link
          to="/naming"
          >命名則</router-link
        >」作成(namima)
      </dd>
      <dt>2021.08.20</dt>
      <dd>ナビゲーション整備、内容選定(ieki)</dd>
      <dt>2021.08.06</dt>
      <dd>雛形作成(ieki)</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
