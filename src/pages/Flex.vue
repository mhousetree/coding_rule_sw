<template>
  <div class="flex">
    <h1>Flex</h1>
    <p>
      Flex(Flexbox)は、レイアウト作成に使われる手法です。ここでは、Flexの使途、主に使うプロパティについて解説します。
    </p>
    <h2 id="rules">Rules</h2>
    <p>
      Flexレイアウトは、要素の中に入っている要素の1次元的配置を整える作用があります。<br />
      ここでは、外側の要素を<b>親要素</b>、中に入っている要素を<b>子要素</b>と呼びます。
    </p>
    <p>
      Flexレイアウトを適用するためには、親要素のCSSに<code>display: flex;</code
      >を指定します。
    </p>
    <h2 id="examples">Examples</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
      asperiores ab laboriosam, dolore ex voluptates laborum exercitationem
      numquam consequatur, cum nisi illo pariatur. Sunt, dolor voluptas eius
      voluptatum quos ratione.
    </p>
    <h2>References</h2>
    <ul>
      <li>
        <a
          href="https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet"
          target="_blank"
          rel="noopener noreferrer"
          >日本語対応！CSS Flexboxのチートシートを作ったので配布します</a
        ><br />
        一通り見ておくとよい。
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: 'Flex',
}
</script>
