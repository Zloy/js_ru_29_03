import $ from 'jquery'

export function loadAll() {
    return $.get('/api/article')
}

export function loadOne(id) {
    return () => $.get('/api/article/' + id)
}