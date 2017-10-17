import Vue from 'vue';
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
import loadStock from 'highcharts/modules/stock';
loadStock(Highcharts);
Vue.use(VueHighcharts, { Highcharts });

Highcharts.setOptions({
  global: {
    timezoneOffset: -(3 * 60), // - 180 для Europe/Moskow
  },
  lang: {
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    shortMonths: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'],
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    resetZoomTitle: 'Сбросить масштаб к 1:1',
    resetZoom: 'Сбросить масштаб',
    printChart: 'Распечатать график',
    numericSymbols: ['тыс.', 'млн.', 'млрд.', 'трлн.', 'P', 'E'],
    noData: 'Нет данных',
    loading: 'Загрузка...',
    drillUpText: 'Назад к {series.name}.',
    downloadSVG: 'Скачать как SVG',
    downloadPNG: 'Скачать как PNG',
    downloadPDF: 'Скачать как PDF',
    downloadJPEG: 'Скачать как JPEG',
    contextButtonTitle: 'Контекстное меню'
  }
});
