const getUser = (req, res) => {
    res.send("Get User ");
};

const postUser = (req, res) => {
    res.send("Post User ");
};

const putUser = (req, res) => {
    res.send("Put User ");
};

module.exports.getUser = getUser;
module.exports.postUser = postUser;
module.exports.putUser = putUser;