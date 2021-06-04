import react, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                    <h2>Society Maintenance System Login Page</h2>
                    <p>Login or register from here to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="User Name" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-group btn-group">
                                <button type="submit" className="btn btn-black">Login</button>
                                <button type="submit" className="btn btn-secondary">Register</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default App;