import { react2angular } from 'react2angular'

angular.module('app.render', [])
       .component('renderImage', react2angular(require('./components/RenderImage').default, ['imageUrl']))
       .controller('ImageController', require('./controllers/ImageController'));
