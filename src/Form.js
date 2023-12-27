import React, { useState } from "react";

const Form = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [role, setRole] = useState("user");
  //   const [Gender, setGender] = useState("male");
  //   const [rules, setRules] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };

  //   const emailHandler = (event) => {
  //     setEmail(event.target.value);
  //   };

  //   const passwordHandler = (event) => {
  //     setPassword(event.target.value);
  //   };

  //   const selectHandler = (event) => {
  //     setRole(event.target.value);
  //   };

  //   const genderHandler = (event) => {
  //     setGender(event.target.value);
  //   };

  //   const rulesHandler = () => {
  //     setRules((rules) => !rules);
  //   };

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user",
    Gender: "male",
    rules: false,
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "rules") {
      setForm((form) => ({ ...form, rules: !form.rules }));
    } else {
      setForm((form) => ({ ...form, [name]: value }));
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={changeHandler}
        />
        <select value={form.role} onChange={changeHandler} name="role">
          <option value={"user"}>user</option>
          <option value={"writer"}>writer</option>
          <option value={"admin"}>admin</option>
        </select>
        <div>
          <label htmlFor="1">Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="1"
            onChange={changeHandler}
            checked={form.Gender === "male"}
          />
          <label htmlFor="2">Female</label>
          <input
            id="2"
            type="radio"
            name="gender"
            value="female"
            onChange={changeHandler}
            checked={form.Gender === "female"}
          />
        </div>
        <input
          type="checkbox"
          checked={form.rules}
          onChange={changeHandler}
          name="rules"
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Form;
