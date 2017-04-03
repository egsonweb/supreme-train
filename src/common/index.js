import angular from 'angular';
import navbarComponent from './navbar/navbar';
import footerComponent from './footer/footer';

const module = angular
  .module('common', [])
  .component('navbar', navbarComponent)
  .component('abc', footerComponent)
  .name;

export default module;
