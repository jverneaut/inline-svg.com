export const sendSvgCopy = svgName => {
  gtag('event', 'svg_copy', {
    'event_category': 'engagement',
    'event_label': svgName
  });
};

export const sendSvgDownload = svgName => {
  gtag('event', 'svg_download', {
    'event_category': 'engagement',
    'event_label': svgName
  });
};

export const sendPageView = (pageName, pagePath) => {
  gtag('config', 'UA-120978536-4', {
    'page_title': pageName,
    'page_path': pagePath
  });
}
