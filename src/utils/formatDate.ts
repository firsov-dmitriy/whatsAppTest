import format from 'date-fns/format';

export type TDateFormat = { date: string | Date; formatStr?: string };

export const dateFormat = (props: TDateFormat) => {
  const { date, formatStr = 'dd.MM.yyyy hh:mm' } = props;
  if (typeof date === 'string') return format(new Date(date), formatStr);
  return format(date, formatStr);
};
