import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  differenceInHours,
  differenceInMinutes,
  format,
  formatRelative,
  parse,
  set,
} from "date-fns";
import { getLocales } from "expo-localization";
import { es, ru } from "date-fns/locale";

import {
  dateFormat,
  dateTimeInputFormat,
  serverDateTimeWithTimezoneFormat,
  shortDateFormat,
} from "@/constants/date";

type Locale = "en" | "es" | "ru";

const locale: Locale = getLocales()[0].languageCode as Locale;

const dateFnsLocale = locale === "es" ? es : locale === "ru" ? ru : undefined;

const formatMap: Record<
  Locale,
  {
    date: string;
    dateTime: string;
    dateTimeDisplay: string;
    inputDate: string;
    inputDateTime: string;
    syncDateTime: string;
    time: string;
    fullDetailDate: string;
    displayFullDateTime: string;
  }
> = {
  ["en"]: {
    date: "MMM d, y",
    dateTime: "MMM d, y hh:mm a",
    dateTimeDisplay: "MMMM dd, yyyy hh:mm a",
    inputDate: dateFormat,
    inputDateTime: dateTimeInputFormat,
    syncDateTime: "MM/dd h:mm a",
    fullDetailDate: "MMMM dd, yyyy",
    time: "hh:mm a",

    displayFullDateTime: "hh:mm a dd MMMM, EE",
  },
  ["es"]: {
    date: "MMM d, y",
    dateTime: "MMM d, y hh:mm a",
    dateTimeDisplay: "MMMM dd, yyyy hh:mm a",
    inputDate: dateFormat,
    inputDateTime: dateTimeInputFormat,
    syncDateTime: "MM/dd H:mm a",
    fullDetailDate: "MMMM dd, yyyy",
    time: "hh:mm a",

    displayFullDateTime: "hh:mm dd MMMM, EE",
  },
  ["ru"]: {
    date: "dd.MM.yyyy",
    dateTime: "dd.MM.yyyy HH:mm",
    dateTimeDisplay: "dd.MM.yyyy HH:mm",
    inputDate: dateFormat,
    inputDateTime: dateTimeInputFormat,
    syncDateTime: "dd.MM.yyyy HH:mm",
    fullDetailDate: "MMMM dd, yyyy",
    time: "HH:mm",

    displayFullDateTime: "hh:mm dd MMMM, EE",
  },
};

type DateInput = string | number | Date | undefined | null;

export default function useFormatDateTime() {
  const { t } = useTranslation();
  const formatAs = useCallback(
    (date: DateInput, formatStr: string) =>
      date ? format(date, formatStr, { locale: dateFnsLocale }) : "",
    []
  );

  const formats = useMemo(() => formatMap[locale], []);

  const getDateFrom = useCallback((dateFrom?: string) => {
    if (!dateFrom) return;

    const updatedDate = set(dateFrom, { hours: 0, minutes: 0, seconds: 0 });

    return format(updatedDate, serverDateTimeWithTimezoneFormat);
  }, []);

  const getDateTo = useCallback((dateTo?: string) => {
    if (!dateTo) return;

    const updatedDate = set(dateTo, { hours: 23, minutes: 59, seconds: 59 });

    return format(updatedDate, serverDateTimeWithTimezoneFormat);
  }, []);

  return useMemo(
    () => ({
      formats,

      formatAsDate: (date: DateInput) => formatAs(date, formats.date),

      formatAsDateTime: (date: DateInput) => formatAs(date, formats.dateTime),

      formatAsTime: (date: DateInput) => formatAs(date, formats.time),

      formatAsFullDetailDate: (date: DateInput) =>
        formatAs(date, formats.fullDetailDate),

      formatRelative: (date: DateInput) =>
        date ? formatRelative(date, new Date(), { locale: dateFnsLocale }) : "",

      formatAsInputDate: (date: DateInput) => formatAs(date, formats.inputDate),

      formatAsInputDateTime: (date: DateInput) =>
        formatAs(date, formats.inputDateTime),

      formatAsDateDisplay: (date: DateInput) =>
        formatAs(date, formats.dateTimeDisplay),

      formatAsShortDate: (date: DateInput) => formatAs(date, shortDateFormat),

      parseFromDateDisplay: (date: string) =>
        parse(date, formats.dateTimeDisplay, new Date()),

      getDateFrom,
      getDateTo,

      differenceBetween: (
        dateString1: string | Date | undefined,
        dateString2: string | Date | undefined
      ) => {
        if (dateString1 && dateString2) {
          const date1 = new Date(dateString1);
          const date2 = new Date(dateString2);

          const hours = differenceInHours(date2, date1);
          const minutes = differenceInMinutes(date2, date1) % 60;

          return t(`{{hours}}h {{minutes}}m`, { hours, minutes });
        }
        return t("0h 0m");
      },

      formatFullDateTime: (date: DateInput) =>
        formatAs(date, formats.displayFullDateTime),
    }),
    [formats, formatAs, t]
  );
}
