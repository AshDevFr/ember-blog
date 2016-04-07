/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  slug: function (req, res) {

    var id = req.param('slug');

    Post.find({slug: id}).exec(function(err, posts) {
      if (err) {return res.serverError(err);}

      return res.json({post: posts[0]});

    });

  }
};

