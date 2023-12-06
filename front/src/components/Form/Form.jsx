import React, { useState } from 'react';
import validateForm from '../../utils/validateForm';
import axios from "axios";
import './Form.modules.css';

const fields = [
  { name: 'firstname', type: 'text', label: 'Firstname', group: 1 },
  { name: 'lastname', type: 'text', label: 'Lastname', group: 1 },
  {
    name: "documentType",
    type: 'select',
    label: 'Document Type',
    options: ["Select",'C.C', 'T.I', 'NIT'],
    group: 2,
  },
  { name: 'document', type: 'text', label: 'Document', group: 2 },
  { name: 'dateOfBirth', type: 'date', label: 'Date of birth', group: 3 },
  { name: 'placeOfBirth', type: 'text', label: 'Place of birth', group: 3 },
  { name: 'placeOfResidence', type: 'text', label: 'Place of residence' },
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'phone', type: 'text', label: 'Phone' },
  { name: 'userName', type: 'text', label: 'User Name' },
  { name: 'password', type: 'password', label: 'Password' },
  { name: 'confirmPassword', type: 'password', label: 'Confirm password' },
];

const Form = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    documentType: "",
    document: "",
    dateOfBirth: "",
    placeOfBirth: "",
    placeOfResidence: "",
    email: "",
    phone: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (property, value) => {
    let updatedForm = { ...form, [property]: value };
    const validationErrors = validateForm(updatedForm);

    setForm(updatedForm);
    setErrors(validationErrors);
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (event.target.type === 'select') {
      handleInputChange(property, value);
    } else {
      handleInputChange(property, value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/usermanager/user", form)
      .then(res => {
        if (res.data && res.status == 200) {
          setForm({
            firstname: "",
            lastname: "",
            documentType: "C.C",
            document: "",
            dateOfBirth: "",
            placeOfBirth: "",
            placeOfResidence: "",
            email: "",
            phone: "",
            userName: "",
            password: "",
            confirmPassword: "",
          });

          alert("User created successfully!");
        }
      }
      ).catch(error => {
        alert(error.response.data);
      });
  };

  const getFieldClassName = (fieldName) => {
    return errors[fieldName] ? 'input error' : 'input';
  };

  const groups = {};

  fields.forEach((field) => {
    if (field.group) {
      if (!groups[field.group]) {
        groups[field.group] = [];
      }
      groups[field.group].push(field);
    }
  });

  return (
    <form className="form" onSubmit={submitHandler}>
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>

      {Object.values(groups).map((group, groupIndex) => (
        <div key={groupIndex} className="flex">
          {group.map((field, index) => (
            <label key={index}>
              {field.type === 'select' ? (
                <select
                  required
                  className={getFieldClassName(field.name)}
                  onChange={changeHandler}
                  name={field.name}
                  value={form[field.name]}
                >
                  {field.options.map((option, optionIndex) => (
                    <option
                      key={optionIndex}
                      value={option}
                      selected={form[field.name] === option}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  required=""
                  placeholder=""
                  type={field.type}
                  className={getFieldClassName(field.name)}
                  onChange={changeHandler}
                  name={field.name}
                  value={form[field.name]}
                />
              )}
              <span>{field.label}</span>
              {errors[field.name] && <span className="error-message">{errors[field.name]}</span>}
            </label>
          ))}
        </div>
      ))}

      {fields
        .filter((field) => !field.group)
        .map((field, index) => (
          <label key={index}>
            {field.type === 'select' ? (
              <select
                required
                className={getFieldClassName(field.name)}
                onChange={changeHandler}
                name={field.name}
                value={form[field.name]}
              >
                {field.options.map((option, optionIndex) => (
                  <option
                    key={optionIndex}
                    value={option}
                    selected={form[field.name] === option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                required=""
                placeholder=""
                type={field.type}
                className={getFieldClassName(field.name)}
                onChange={changeHandler}
                name={field.name}
                value={form[field.name]}
              />
            )}
            <span>{field.label}</span>
            {errors[field.name] && <span className="error-message">{errors[field.name]}</span>}
          </label>
        ))}

      <button className="submit" disabled={Object.keys(errors).length > 0}>
        Submit
      </button>
      <p className="signin">
        Already have an account? <a href="#">Sign in</a>
      </p>
    </form>
  );
};

export default Form;
