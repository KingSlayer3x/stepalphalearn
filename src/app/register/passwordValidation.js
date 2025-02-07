import { useState } from "react";
import styles from './password.module.css';

export default function PasswordValidation(){
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const validatePassword = (value) => {
        if (value.length === 0) {
          setMessage('');
        } else if (value.length < 8) {
          setMessage('Password must be at least 8 characters long.');
        } else if (!/[A-Z]/.test(value)) {
          setMessage('Password must contain at least one uppercase letter.');
        } else if (!/[0-9]/.test(value)) {
          setMessage('Password must contain at least one number.');
        } else if (!/[!@#$%^&*]/.test(value)) {
          setMessage('Password must contain at least one special character.');
        } else {
          setMessage('Password is valid!');
        }
      };

      const handleInputChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
      };

      return (
        <div className={styles.input3}>
          <label htmlFor="password" className={styles.labels}>Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handleInputChange}
            placeholder="Enter your password"
            className={styles.field}
          />
          <p className={`${styles.message} ${message === 'Password is valid!' ? styles.valid : styles.invalid}`}>
            {message}
          </p>
        </div>
      );
    }