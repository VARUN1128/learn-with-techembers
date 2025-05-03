import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFCP, getLCP }) => {
      getCLS(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
    });
  }
};

export default reportWebVitals;
