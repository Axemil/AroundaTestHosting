import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Gordita-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Gordita-Bold.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/Gordita-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Gordita-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Gordita-Light.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/Gordita-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Gordita-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Gordita-Medium.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/Gordita-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Gordita-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Gordita-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/Gordita-Regular.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `;(function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                })(window, document, "script", "dataLayer", "GTM-55T4HZL")`
            }}
          ></script>

          <link rel="icon" type="image/x-icon" href="/favicon_arounda.ico" />
          <link
            rel="icon"
            type="image/x-icon"
            sizes="16x16"
            href="/favicon-16x16.ico"
          />
          <link
            rel="icon"
            type="image/x-icon"
            sizes="32x32"
            href="/favicon-32x32.ico"
          />
          <link
            rel="icon"
            type="image/x-icon"
            sizes="48x48"
            href="/favicon-48x48.ico"
          />

          <script
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `!(function(c, h, i, m, p) {
                    ;(m = c.createElement(h)),
                    (p = c.getElementsByTagName(h)[0]),
                    (m.async = 1),
                    (m.src = i),
                    p.parentNode.insertBefore(m, p)
                })(
                    document,
                    "script",
                    "https://chimpstatic.com/mcjs-connected/js/users/a21e974ea6ac7b0b696b05da5/f66e8437304041aa54ab14c2a.js"
                )`
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
