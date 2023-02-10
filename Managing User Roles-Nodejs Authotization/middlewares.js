const authCourse = (req, res, next) => {
    const courseNumber = parseInt(req.params.number);
    if (req.body.courses.includes(courseNumber)) {
        next();
    } else {
        res.status(401).json("Course Access Denied")
    }


}
const authPage = (permissions) => {
    return (req, res, next) => {
        const userRole = req.body.role;
        if (permissions.includes(userRole)) {
            next();
        } else {
            res.status(401).json("Permission Denied")
        }
    }
}


module.exports = {
    authPage,authCourse
}



// {
//     name:"lawrence",
//     courses:[220,212,444,555],
//     role:"student"
// } -- uaw this as the test data when testing with postman
