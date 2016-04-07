import React, { Component, PropTypes } from 'react'
import toggleOpen from '../../HOC/toggleOpen'
require('./style.css');

class CommentAdd extends Component {

    static propTypes = {
        toggleOpen: PropTypes.func.isRequired,
        addComment: PropTypes.func
    };

    render () {
        if (this.props.isOpen) {
            return (
                <div className="comment-new">
                    <textarea rows="2" cols="48" ref="textarea"></textarea>
                    <a href="#" onClick={this.add}>submit</a>,
                    <a href="#" onClick={this.props.toggleOpen}>cancel</a>
                </div>
            )
        }
        else {
            return (
                <div className="comment-add">
                    <a href="#" onClick={this.props.toggleOpen}>add new</a>
                </div>
            )
        }
    }

    add = (ev) => {
        ev.preventDefault();
        var newCommentText = this.refs.textarea.value;

        if (this.props.addComment) {
            this.props.addComment(newCommentText)
            this.props.toggleOpen();
        }
        else {
            console.log("--", "new comment:", newCommentText)
        }
    }
}

export default toggleOpen(CommentAdd)