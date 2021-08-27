<template>
  <div class="home">
    <h1>命名則</h1>
    <p>クラス名や変数名を宣言する際の名前付の規則。</p>
    <h2>HTML &amp; CSS</h2>
    <section>
      <h3>クラス、ID</h3>
      <pre v-highlightjs><code class="scss">
.the-naming-rule
      </code></pre>
      <ol>
        <li>ケバブケースで記述</li>
        <li>
          同一カテゴリのクラスについて、始めの単語を一致せることによって判別できるようにする。<br />
          ex) テキスト装飾関連のクラス： text-red や text-bold とする
        </li>
        <li>目安として3単語以内</li>
      </ol>
    </section>
    <section>
      <h3>CSS Variables</h3>
      <pre v-highlightjs><code class="scss">
--theNamingRule: ;
      </code></pre>
      <ol>
        <li>-- で始めることが必須。キャメルケースで記述</li>
      </ol>
    </section>
    <h2>Javascript</h2>
    <section>
      <p>
        <strong>var による宣言は名前空間を破壊するため行わない。</strong>必ず
        let か const を用いること
      </p>
      <h3>変数</h3>
      <pre v-highlightjs><code class="javascript">
let theNamingRule = hoge;
      </code></pre>
      <p>変数はキャメルケースで記述</p>
      <h3>定数</h3>
      <pre v-highlightjs><code class="javascript">
const THE_NAMING_RULE = hoge;
      </code></pre>
      <p>定数はアッパースネークケースで記述</p>
    </section>
    <h2>PHP</h2>
    <section>
      <pre v-highlightjs><code class="php">
$the_naming_rule = hoge;
      </code></pre>
      <p>スネークケースで記述</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Naming',
}
</script>
