export default ({ router }) => {
  if (typeof window !== 'undefined') {
    // Add Google Tag Manager script to head
    const headScript = document.createElement('script');
    headScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TGRX7QF6');`;
    document.head.appendChild(headScript);

    // Add Google Tag Manager noscript to body
    const bodyNoscript = document.createElement('noscript');
    bodyNoscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TGRX7QF6"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(bodyNoscript);

    // Track page views on route change
    router.afterEach((to, from) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'pageview',
        page: to.path,
      });
    });
  }
}
