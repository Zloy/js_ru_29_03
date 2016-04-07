import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { ADD_COMMENT } from '../constants'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args);

        AppDispatcher.register((action) => {
            const { type, articleId, text } = action;

            switch (type) {
                case ADD_COMMENT:
                    var newItem = { id: this.getNewItemId(), text: text };
                    this.__add(newItem);
                    console.log("--", "comments:", this.getAll());
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