const homeView = (req, res) => {
    console.log("dude that works, Amazing!!!");
}
const NotFoundView = (req, res) => {
    console.log("Yes man ! this is a 404 Error!")
}
module.exports = {NotFoundView, homeView}
