export const injectSenderScript = () =>
  new Promise((resolve, reject) => {
    if (!document.getElementById('mediacast')) {
      var script = document.createElement('script');
      script.src =
        'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';
      script.async = true;
      script.id = 'mediacast';
      script.addEventListener('load', resolve);
      script.addEventListener('error', reject);
      document.body.appendChild(script);
    } else {
      resolve();
    }
  });
