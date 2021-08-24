<template>
  <div class="home">
    <h1>概要</h1>
    <p>こちらは社内統一コーディング(マークアップ)ルールのページです。</p>
    <h1>更新履歴</h1>
    <dl class="timetable">
      <dt>2021.08.24</dt>
      <dd>
        「<router-link to="/proposal">提案事項</router-link>」「<router-link
          to="/naming"
          >命名則</router-link
        >」作成
      </dd>
      <dt>2021.08.20</dt>
      <dd>ナビゲーション整備、内容選定</dd>
      <dt>2021.08.06</dt>
      <dd>雛形作成</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
