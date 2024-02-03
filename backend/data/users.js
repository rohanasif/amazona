import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin:true,
    },
    {
        name: 'Ali Ahmed',
        email: 'ali@example.com',
       password:bcrypt.hashSync('123456', 10),
    },
    {
        name: 'tester',
        email: 'tester@example.com',
        password:bcrypt.hashSync('123456', 10),
    }
]
export default users