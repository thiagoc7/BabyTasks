import moment from 'moment';
import momentPtLocale from 'moment/locale/pt-br';

export function today() {
  return moment().format('YYYY-MM-DD');
}

export function dateToString(date) {
  return moment(date).format('YYYY-MM-DD')
}

export function format(date) {
  return moment(date).locale('pt-br', momentPtLocale).format('ddd, DD/MM/YYYY')
}