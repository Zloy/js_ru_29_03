import React, { Component, PropTypes } from 'react'
import ArticleList from './../components/ArticleList'
import { deleteArticle } from '../AC/articles'
import { addComment } from '../AC/Comments'
import AttachedToStore from '../HOC/AttachedToStore'
import stores from '../stores'

class AppContainer extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        return (
            <ArticleList
                articles = {this.props.items}
                deleteArticle = {deleteArticle}
                addComment = {addComment}
            />
        )
    }
}

export default AttachedToStore(AppContainer, stores.articles)