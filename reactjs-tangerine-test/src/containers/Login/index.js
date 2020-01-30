import React from 'react';
import './style.css';

/**
* @author
* @function Login
**/

const Login = ({ permissions, ...props }) => {
    return (
        <div className="Login">
            <form method="post">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit">Login</button>
            </form>
        </div>

        // <Create {...props}>
        //     <SimpleForm
        //         defaultValue={{ name: 'admin', password: 'admin' }}>
        //         {permissions === 'admin' &&
        //             <TextInput source="name" validate={[required()]} />
        //          &&
        //             <TextInput source="password" validate={[required()]} />}
        //     </SimpleForm>
        // </Create>
)

}

export default Login