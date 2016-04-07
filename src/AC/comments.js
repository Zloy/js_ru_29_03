import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'

export function addComment(articleId, text) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            articleId: articleId,
            text: text
        }
    })
}