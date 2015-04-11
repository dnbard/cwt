var React = require('react');

var Page = React.createClass({
    getInitialState: function() {
        return {
            visible: true
        };
    },
    onClick: function(event){
        this.setState({
            visible: true
        });

        this.props.onActivate(event, this.props.name);
    },
    render: function(){
        var isVisible = this.state.visible;

        if (isVisible){
            return (
                <div>
                    Page {this.props.name}
                </div>
            );
        } else {
            return (
                <button onClick={this.onClick}>Show {this.props.name}!</button>
            );
        }
    }
});

module.exports = Page;
