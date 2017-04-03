import angular from 'angular';
import appTemplate from './app.html'

import Common from './common';

function bootstrap() {
  angular.bootstrap(document, ['supreme-train'])
}

const appComponent = {
  template: appTemplate,
  controller: class AppController {}
};


angular
  .module('supreme-train', [
    Common
  ])
  .component('app', appComponent);

angular
  .element(document)
  .ready(bootstrap);
