import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ONE_ARTICLE } from '../constants'
import { loadAll, loadOne } from './api/articles'
import { asyncAC } from './utils'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: { id }
    })
}

export const loadAllArticles = asyncAC(loadAll, LOAD_ALL_ARTICLES)
export const getArticleLoader = id => asyncAC(loadOne(id), LOAD_ONE_ARTICLE)