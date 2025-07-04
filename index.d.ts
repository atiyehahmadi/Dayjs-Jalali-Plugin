import { PluginFunc, Dayjs } from 'dayjs';

declare const plugin: PluginFunc;
export = plugin;

type CalendarType = 'jalali' | 'gregory' | 'hijri';

declare module 'dayjs' {
  export function calendar(calendarType: CalendarType): Dayjs;

  export function isJalali(): boolean;

  export interface FormatObject {
    jalali?: boolean;
  }

  interface Dayjs {
    calendar(calendarType: CalendarType): Dayjs;
  }
}
