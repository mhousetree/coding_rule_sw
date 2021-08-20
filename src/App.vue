<template>
  <div id="app">
    <header>
      <h1>
        <router-link to="/">Coding & Markup Rules in Science Web</router-link>
      </h1>
    </header>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <p>(以下仮設)</p>
      <ol>
        <li><a href="">はじめに</a></li>
        <li>
          <a href="">Layout</a>
          <ol>
            <li>
              <a href="">Flex</a>
              <ol>
                <li><a href="">Rules</a></li>
                <li><a href="">Examples</a></li>
              </ol>
            </li>
            <li>
              <a href="">Grid</a>
              <ol>
                <li><a href="">Rules</a></li>
                <li><a href="">Examples</a></li>
              </ol>
            </li>
            <li>
              <a href="">Flex or Grid</a>
            </li>
            <li>
              <a href="">Float</a>
              <ol>
                <li><a href="">Rules</a></li>
                <li><a href="">Examples</a></li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <a href="">Contents</a>
          <ol>
            <li>
              <a href="">Headings</a>
              <ol>
                <li><a href="">Rules</a></li>
                <li><a href="">Examples</a></li>
              </ol>
            </li>
            <li>
              <a href="">Texts</a>
              <ol>
                <li><a href="">Rules</a></li>
                <li><a href="">Examples</a></li>
              </ol>
            </li>
            <li>
              <a href="">Lists</a>
              <ol>
                <li><a href="">Rules</a></li>
                <li><a href="">ul</a></li>
                <li><a href="">ol</a></li>
                <li><a href="">dl</a></li>
                <li><a href="">Examples</a></li>
              </ol>
            </li>
            <li>
              <a href="">Media</a>
              <ol>
                <li><a href="">Rules</a></li>
                <li><a href="">Examples</a></li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
$text-color: #2c3e50;
$bg-color: #fff;
$red: #ff4000;
$blue: #50b2c0;
$gray: #73877b;

:root {
  /* Fonts */
  font-family: 'Noto Sans JP', Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 1rem;
}

* {
  margin: 0;
}

#app {
  /* Layouts */
  display: grid;
  grid-template-columns: 13rem 1fr;
  grid-template-rows: max-content 1fr;
}

header {
  grid-column: 1 / -1;

  h1 {
    font-size: 2.5rem;
    font-weight: 300;
    padding: 1rem 0 2rem;

    a {
      line-height: 2;
      display: block;
      box-sizing: border-box;
      text-decoration: none;
      color: inherit;
    }
  }
}

nav {
  display: flex;
  flex-direction: column;
  border-right: 1px solid lighten($gray, 40);

  a {
    font-weight: 500;
    color: #2c3e50;
  }
  a.router-link-exact-active {
    color: #42b983;
  }
  ol {
    list-style: none;
  }
  li {
    position: relative;
    &::before {
      position: absolute;
    }
  }
  > ol {
    counter-reset: level1;
    padding-left: 1rem;
    > li {
      &::before {
        left: -1rem;
        counter-increment: level1;
        content: counter(level1);
      }
      > ol {
        counter-reset: level2;
        padding-left: 1.9rem;
        > li {
          &::before {
            left: -1.9rem;
            counter-increment: level2;
            content: counter(level1) '.' counter(level2);
          }
          > ol {
            counter-reset: level3;
            padding-left: 2.7rem;
            > li {
              &::before {
                left: -2.7rem;
                counter-increment: level3;
                content: counter(level1) '.' counter(level2) '.' counter(level3);
              }
            }
          }
        }
      }
    }
  }
  > ol > li > ol {
    counter-reset: level2;
    > li::marker {
    }
  }
}

main {
  padding-left: 1rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }
  h1 {
    font-size: 2rem;
    line-height: 1.5;
    border-bottom: 1px solid lighten($gray, 40);
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
}

.timetable {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  dt {
    padding-right: 1rem;
  }
}
</style>
