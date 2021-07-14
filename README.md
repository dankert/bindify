# Bindify-JS

This is a lightweight javascript 2-way-data-binding framework, implemented as a Jquery-Plugin.

## Advantages

- Really lightweight, ~ 1kB (minified and gzipped)
- does not need any [CSP](https://en.wikipedia.org/wiki/Content_Security_Policy) permissions.
- 2-way-binding


## Disadvantages

- Need for [JQuery](http://jquery.com).

## Usage

### HTML element binding

Bind text content

    <p>The name is <span data-binding-text="person.name"></span>

2-way-binding values for input elements

    <form><input data-binding-value="person.name" /></form>

Bind attributes for a HTML element

    <span data-binding-attributes="{&quot;class&quot;:&quot;styleClass&quot;}" />This element gets a style class</span>

Binding lists

    <ul>
      <li data-binding-list="{&quot;list&quot;:&quot;names&quot;, &quot;var&quot;:&quot;name&quot;}" data-binding-text="name">
      </li>
    </ul>

### JS application

    $data = { "person": {"name":"Sarah Connor"},
              "names": {"Sarah","John","Arnold"},
              "styleClass":"anyCSSClass",
            };
    $('body').bindify( $data );
    
### Settings

You are able to set some configuration settings for the plugin:

- `updateDOM`: Should the DOM elements be updated after the data model has changed? Default: yes.
- `updateModel`: Should the data model be updated after user input? Default: yes.
- `prefix`: Prefix for data binding attributes. Default: 'binding'.
- `debug`: the debug mode is logging to the browser console. Default: off.
- `updateEvent`: the event, which triggers the data model update. Default: 'input'
- `onUpdate`: a user callback which is called after the data model has changed.
- `updateCallback`: Callback handle for propagating changes in the data model. Must be of type `JQuery.Callbacks()`!

## FAQ

- Why not using Mustache for that?

Yes, mustache is simple, lightweight and stable. But it is unable to re-bind new values to the UI. Yes, you may cache the template and re-execute it, but than there will be a flickering UI.

- Why not using Vue.js?

Vue is great, but has a big disadvantage: It needs the "eval" CSP permission, because every binded area is treated as a "template", which is compiled to a render function and then executed via eval(). I do not like this approach.

- Why not using Knockout.js?

Knockout is great, but has the same point as vue: It needs the "eval" CSP permission. There is a TKO-Branch of Knockout without this issue, but it is not finished yet. 
 
- Why the dependency to JQuery

Did you really believe that i'll do that without jquery? ;) JQuery is adult, stable and present in all of my projects, so why not using it?

- Is it possible to rewrite this framework without jquery?

Of course, yes. What are you waiting for ;)