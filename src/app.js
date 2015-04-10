var React = require('react');

var Application = React.createClass({
    getInitialState: function() {
        return {
            page: 'splash'
        };
    },
    onActivate: function(event, pageName){
        this.setState({ page: pageName });
        this.render();
    },
    isPageActive: function(pageName){
        return this.state.page === pageName;
    },
    render: function(){
        var currentPage

        return (
            <div>
                <Page name="menu" isActive={this.isPageActive} onActivate={this.onActivate}></Page>
                <Page name="splash" isActive={this.isPageActive} onActivate={this.onActivate}></Page>
                <Page name="ready" isActive={this.isPageActive} onActivate={this.onActivate}></Page>
            </div>
        );
    }
});

var Page = require('./components/page');

React.render(
    <Application>

    </Application>,
    document.body
);
