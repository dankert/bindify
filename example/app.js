
// Some sample data.
let data = {
    overview: 'My first bindify data-binding example',
    theme: {class: 'theme-silver'},
    names: [ 'John','Arnold' ],
    person: { name: 'Arnold Schwarzenegger', fullname: function () {return "Mr./Mrs. "+data.person.name; } },
};

// our own updater for informing the binding about data changes.
let updater = $.Callbacks();

$('html').bindify( data,
    {   debug: true,
        prefix: 'bind',
        updateModel:true,
        updateDOM:true,
        updateEvent: 'input',
        onUpdate: function(d) {
            console.log("The data has changed.");
            console.log("New name in callback data: "+d.person.name);    // the callback is sending the new data object
            console.log("New name in data object  : "+data.person.name); // Our data object has changed too
        },
        updateCallback: updater
    } );


// Now we want to do some changes to the data model.
setTimeout( function() {

    // Ok, now we are changing the data model.
    data.person.name = "Sarah Connor";
    data.names.push("Sarah");
    // for now, nothing else is happening. The DOM stays in its state.
    // to update the binding we have to inform the data binding:
    updater.fire();

},1000 );