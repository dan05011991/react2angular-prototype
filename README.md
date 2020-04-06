Converting (or creating a new) React component in a AngularJS application.

Typically a angularJS application follows this directory structure:
```
- app.js
-- modules
--- module1
---- index.js
---- controllers
----- exampleController.js
---- directives
----- exampleComponent.js
---- routes
----- exampleRoutes.js
---- partials
----- doc.html
```

A react component generally performs the responsibilities normally separated in angularJS controllers and directives.
Therefore, when replacing an angularJS directive, you are replacing the directive and controller responsible.




Gotchas:
- To pass properties into react components, the property names must exist on the react2angular component include statement:
```
import { react2angular } from 'react2angular'

angular.module('app.render', [])
       .component('renderImage', react2angular(require('./components/RenderImage').default, ['imageUrl']))
       .controller('ImageController', require('./controllers/ImageController'));
```

- To pass in a scoped property, you must NOT wrap the property in {{ }}
```
 <render-image image-url=item.img></render-image>
```
NOT
```
 <render-image image-url={{item.img}}></render-image>
```

