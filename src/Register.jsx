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
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);

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
  const validatePassword = (password) => {
    // Kiểm tra các điều kiện mật khẩu tại đây
    // Ví dụ: Mật khẩu phải có ít nhất 8 ký tự và chứa ít nhất một chữ cái viết hoa và một số
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      alert(pass);
      if (validatePassword(pass)){
        setPasswordValidate(true);
        if (pass === confirmPassword) {
          // Mật khẩu khớp
          setPasswordMatch(true);
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
        } else {
          // Mật khẩu không khớp
          setPasswordMatch(false);
        }
      }
      else{
        setPasswordValidate(false);
      }
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
          onChange={(e) => {
            setPass(e.target.value);
          }}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        {!passwordValidate && (
          <p style={{ color: "yellow" }}>
            Password incorrect. Password must be at least 8 characters and contain at least one uppercase letter and one number
          </p>
        )}
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
        {!passwordMatch && (
          <p style={{ color: "yellow" }}>Password does not match.</p>
        )}
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
      <button className="link-btn">Already have an account? Login here.</button>
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
