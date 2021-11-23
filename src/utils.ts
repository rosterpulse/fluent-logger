import { DateTime } from 'luxon';

const identity = <T>(id: T) => id;

const isProduction = (env: string) => env === 'production';

const isExceptionField = (err: Record<string, any>) =>
  Boolean(err?.message) && Boolean(err?.stack);

const datetime = {
  now: () => DateTime.utc().toISO(),
};

export { datetime, identity, isExceptionField, isProduction };
