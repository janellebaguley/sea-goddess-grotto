module.exports = {
    getPosts: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.blog.get_posts(id)
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err))
    }
}