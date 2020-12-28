import config from '../config';
import * as Sentry from '@sentry/browser';



  export const SentryInitialize = () => {
    Sentry.init({
        dsn: config.sentry_dsn
      });
}