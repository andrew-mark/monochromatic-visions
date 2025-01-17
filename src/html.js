import React from 'react';

export default class HTML extends React.Component {

  componentDidMount = () => {
    getViewportSingleUnit()
    window.addEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
  }

  getViewportSingleUnit = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Monochromatic Visions</title>
          {this.props.headComponents}
          <link rel="stylesheet" href="https://use.typekit.net/ynv0aud.css"></link>
          <meta name="theme-color" content="#ffffff"></meta>
          <meta name="description" content="Monochromatic Visions band official website."></meta>
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}