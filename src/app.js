import angular from 'angular';


function bootstrap() {
  angular.bootstrap(document, ['supreme-train'])
}


angular.module('supreme-train', [])

angular
  .element(document)
  .ready(bootstrap);
