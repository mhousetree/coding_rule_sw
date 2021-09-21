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
      <ol id="side-nav">
        <li>
          <router-link :to="{ name: 'About', hash: '#hoge' }"
            >はじめに</router-link
          >
        </li>
        <li><router-link to="/proposal">提案事項</router-link></li>
        <li><router-link to="/naming">命名則</router-link></li>
        <li>
          <router-link to="/layout">Layout</router-link>
          <ol>
            <li>
              <router-link to="/flex">Flex</router-link>
              <ol>
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
              </ol>
            </li>
            <li>
              <router-link to="/grid">Grid</router-link>
              <ol>
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
        <li>
          <a href="">Other Techniques</a>
          <ol>
            <li><a href="">Pseudo-elements</a></li>
            <li>
              <a href="">Introduction of HTML5(HTML Living Standard)</a>
              <ol>
                <li><a href="">Introduction</a></li>
                <li><a href="">Details, Summary</a></li>
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
$blue: #8075ff;
$yellow: #fbff12;
$gray: #73877b;

:root {
  /* Fonts */
  font-family: 'Noto Sans JP', Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}

body {
  box-sizing: border-box;
  padding: 1rem;
}

* {
  margin: 0;
}

#app {
  /* Layouts */
  height: 100%;
  display: grid;
  grid-template-columns: 13rem 1fr;
  grid-template-rows: max-content 1fr;
}

header {
  grid-column: 1 / -1;

  h1 {
    font-size: 2rem;
    font-weight: 300;
    padding-bottom: 1rem;

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
  padding-top: 1rem;
  padding-right: 1rem;
  align-self: start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  position: sticky;
  top: 0;

  a {
    color: $text-color;
    text-decoration: none;
    display: block;
    &.router-link-exact-active {
      color: $blue;
      + ol,
      + ol ol {
        display: block;
      }
    }
    &:not(.router-link-exact-active):hover {
      background-color: $yellow;
    }
  }
  #side-nav > li > a:not(.router-link-exact-active) {
    + ol {
      display: none;
      height: 0;
      &.nav-show {
        display: block;
        opacity: 1;
        height: max-content;
        animation-duration: 0.2s;
        animation-name: fade-in;
      }
      @keyframes fade-in {
        0% {
          display: none;
          opacity: 0;
          height: 0;
        }
        1% {
          display: block;
          opacity: 0;
          height: 0;
        }
        100% {
          display: block;
          opacity: 1;
          height: max-content;
        }
      }
    }
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
      font-weight: 500;
      &::before {
        left: -1rem;
        counter-increment: level1;
        content: counter(level1);
      }
      > ol {
        counter-reset: level2;
        padding-left: 0.9rem;
        > li {
          font-weight: 500;
          &::before {
            left: -1.9rem;
            counter-increment: level2;
            content: counter(level1) '.' counter(level2);
            font-weight: 400;
          }
          > ol {
            counter-reset: level3;
            padding-left: 0.8rem;
            font-weight: 400;
            > li {
              &::before {
                left: -2.7rem;
                counter-increment: level3;
                content: counter(level1) '.' counter(level2) '.' counter(level3);
                font-weight: 300;
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
  border-left: 1px solid lighten($gray, 40);
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
  h2 {
    font-size: 1.5rem;
    line-height: 1.5;
    border-bottom: 1px solid lighten($gray, 40);
    margin-bottom: 0.7rem;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 0.7rem;
  }
  p {
    margin-bottom: 1rem;
  }
  strong {
    color: $red;
    font-weight: 500;
  }
  section {
    margin-bottom: 1.5rem;
  }
  a {
    color: $blue;
  }
}

pre {
  margin-bottom: 1rem;
}

code {
  font-family: 'Ubuntu Mono', 'Noto Sans JP', monospace;
  font-size: 17px;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  margin: 0 0.5rem;
  background-color: mix($bg-color, mix($bg-color, mix($text-color, $bg-color)));
  font-weight: 700;

  &.hljs {
    padding: 0.5em 1em;
    font-weight: 400;
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

<script>
export default {
  beforeUpdate: () => {
    const classElement = document.querySelectorAll('.router-link-exact-active')
    classElement.forEach((element) => {
      element.classList.remove('router-link-exact-active')
    })
  },
  updated: () => {
    let promise = new Promise((resolve) => {
      const activeSection = document.querySelector('.router-link-exact-active')
      if (
        activeSection.parentNode.parentNode.parentNode.parentNode.id ===
        'side-nav'
      ) {
        activeSection.parentNode.parentNode.classList.add('nav-show')
        activeSection.parentNode.parentNode.previousElementSibling.classList.add(
          'router-link-exact-active',
        )
      } else if (
        activeSection.parentNode.parentNode.parentNode.parentNode.parentNode
          .parentNode.id === 'side-nav'
      ) {
        activeSection.parentNode.parentNode.parentNode.parentNode.classList.add(
          'nav-show',
        )
        activeSection.parentNode.parentNode.previousElementSibling.classList.add(
          'router-link-exact-active',
        )
        activeSection.parentNode.parentNode.parentNode.parentNode.previousElementSibling.classList.add(
          'router-link-exact-active',
        )
      }
      resolve()
    })

    promise.then(() => {
      const hoverShowNavTarget = document.querySelectorAll(
        '#side-nav>li>a:not(.router-link-exact-active)',
      )

      hoverShowNavTarget.forEach((element) => {
        const parentLiElement = element.parentNode
        const childElements = parentLiElement.children
        for (let i = 0; i < childElements.length; i++) {
          if (childElements.item(i).nodeName === 'OL') {
            parentLiElement.addEventListener('mouseover', () => {
              childElements.item(i).classList.add('nav-show')
            })
            parentLiElement.addEventListener('mouseout', () => {
              childElements.item(i).classList.remove('nav-show')
            })
          }
        }
      })
    })

    // console.log(activeSection.parentNode.parentNode.parentNode.parentNode.id)
  },
}
</script>
