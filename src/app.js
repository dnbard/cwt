var React = require('react'),
    PAGES = require('./enums/pages'),
    ACTIONS = require('./enums/actions'),
    dispatcher = require('./core/dispatcher');

var Application = React.createClass({
    getInitialState: function() {
        return {
            page: PAGES.SECOND
        };
    },
    render: function(){
        return this.state.page;
    },
    events: [],
    componentDidMount: function(){
        var event = dispatcher.register(function(payload){
            if (payload.action !== ACTIONS.PAGE_CHANGED){ return; }

            this.setState({ page: payload.page });
        }.bind(this));

        this.events.push(event);
    },
    componentWillUnmount: function(){
        this.events.forEach(dispatcher.unregister);
    }
});

var Page = require('./components/page');

React.render(
    <Application></Application>,
    document.body
);

setTimeout(function(){
    dispatcher.dispatch({
        action: ACTIONS.PAGE_CHANGED,
        page: PAGES.MAIN
    });
}, 2500);
