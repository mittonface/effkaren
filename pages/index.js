import { Fragment } from "react";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <Fragment>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-176715898-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-176715898-1', {
                      page_path: window.location.pathname,
                    });
                  `,
            }}
          />
        </Fragment>
        <title>hey fuck you karen</title>
      </Head>
      <div class="container">
        <a href="https://twitter.com/JimGaffigan/status/1299206772364902400">
          <img class="resize_fit_center" src="/fuckyoukaren.png" />
        </a>
      </div>
    </div>
  );
}
