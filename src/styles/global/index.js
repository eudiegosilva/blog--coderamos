import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font-size: 100%;
    font: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 100%;
    line-height: 1;

    ::-webkit-scrollbar {
      background-color: var(--primary);
      width: 8px;
    }
  ::-webkit-scrollbar-track {
      background-color: var(--primary);
      border-radius: 4px;
    }
  ::-webkit-scrollbar-thumb {
      background-color: var(--secondary);
      border-radius: 4px;
    }
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body.dark {
    --primary: #000000;
    --secondary: #33A1F2;
    --border: #111111;
    --link: #F81CE5;
    --text: #FFFFFF;
    --white: #FFFFFF;
    --black: #000000;
  }

  body.light {
    --primary: #FFFFFF;
    --secondary: #33A1F2;
    --border: #CCCCCC;
    --link: #F81CE5;
    --text: #222222;
    --white: #FFFFFF;
    --black: #000000;
  }
`
