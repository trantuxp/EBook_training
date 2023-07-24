import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import axios from "axios";

export const Register = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [Code, setCode] = useState('');
    const handleClickToOpen = () => {
      setOpen(true);
    };
    const handleToClose = () => {
      setOpen(false);
    };
    const handleSubmitDialog = (e) => {
      e.preventDefault();
      alert(Code);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
          name: name,
          email: email,
          pass: pass,
        };

        axios
          .post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then((res) => {
            console.log(res);
            console.log(res.data);
          });

        alert([name, email, pass, confirmPassword]);
        setOpen(true);
    }

    return (
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="full Name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="confirmPassword"
            required
          />
          <button type="submit">Log In</button>
          <Dialog open={open} onClose={handleToClose}>
            <DialogTitle>{"Enter your code!"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <label htmlFor="code">Code: </label>
                <input
                  className="input-number"
                  value={Code}
                  name="name"
                  onChange={(e) => setCode(e.target.value)}
                  id="name"
                  placeholder="code"
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSubmitDialog} color="primary" autoFocus>
                Submit
              </Button>
              <Button onClick={handleToClose} color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </form>
        <button className="link-btn">
          Already have an account? Login here.
        </button>
        <label className="link-btn-using">Or Sign up using </label>
        <div className="horizontal">
          <div className="child">
            <button className="btn-logo">
              <img className="img-btn-logo" src="/img/fb.jpg" />
            </button>
          </div>
          <div className="child">
            <button className="btn-logo">
              <img className="img-btn-logo" src="/img/gg.jpg" />
            </button>
          </div>
          <div className="child">
            <button className="btn-logo">
              <img className="img-btn-logo" src="/img/twiter.jpg" />
            </button>
          </div>
        </div>
      </div>
    );
}
