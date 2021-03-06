/**
 * "import" statements are used to refer the things we need.
 * 
 * Description:
 * Angular apps are modular. They consist of many files each dedicated to a purpose. 
 * 
 * Angular itself is modular. It is a collection of library modules each made up of several, 
 * related features that we'll use to build our application. When we need something from a 
 * module or library, we import it. 
 * 
 * Here we import the Angular 2 core so that our component code can have access to the 
 * @Component decorator.
 */
import { Component } from '@angular/core';

/**
 * Decorator that tells Angular what template to use and how to create the component.
 * 
 * Description:
 * Component is a decorator function that takes a metadata object as argument. We apply 
 * this function to the component class by prefixing the function with the @ symbol and
 * invoking it with a metadata object, just above the class. 
 * 
 * @Component is a decorator that allows us to associate metadata with the component class. 
 * The metadata tells Angular how to create and use this component.
 * 
 * This particular metadata object has two fields, a selector and a template. 
 * 
 * The selector specfies a simple CSS selector for an HTML element that represents the component. 
 * The element for this component is named myapp. Angular creates and displays an instance of our 
 * AppComponent wherever it encounters a my-app element in the host HTML.
 * 
 * The template specifies the component's companion template, written in an enhanced form of HTML 
 * that tells Angular how to render this component's view. 
 * Our template is a single line of HTML announcing "My First Angular 2 App". A more advanced template
 * could contain data bindings to component properties and might identify other application components 
 * which have their own templates. These templates might identify yet other components. 
 * In this way an Angular application becomes a tree of components.
 */
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
})

/**
 * Every Angular app has at least one root component, conventionally named "AppComponent", 
 * that hosts the client user experience.
 * 
 * Components are the basic building blocks of Angular applications. A component controls 
 * a portion of the screen — a view — through its associated template.
 * 
 * When we're ready to build a substantive application, we can expand this class with 
 * properties and application logic
 * We export AppComponent so that we can import it elsewhere in our application.
 */
export class AppComponent { }
