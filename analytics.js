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

export const sendScreenView = screenName => {
  gtag('event', 'screen_view', {
    'app_name': 'inline-svg.com',
    'screen_name': screenName
  });
}
