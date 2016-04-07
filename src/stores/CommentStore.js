import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { ADD_COMMENT } from '../constants'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args);

        AppDispatcher.register((action) => {
            const { type, data } = action;
            const { articleId, text} = data;

            switch (type) {
                case ADD_COMMENT:
                    var newItem = { id: this.getNewItemId(), text: text };
                    this.__add(newItem);
                    //нет, стор должен менять только сам себя, для этого мы и сделали __add приватным
                    stores.articles.addComment(articleId, newItem.id);
                    this.emitChange();
                    break;
            }
        })
    }

    getNewItemId() {
        return(Math.max.apply(Math, this.getAll().map(function(item){return item.id;})) + 1);
    }
}

export default CommentStore
