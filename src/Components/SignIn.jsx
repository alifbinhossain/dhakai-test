import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/dashboard";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://devapi.dhakai.com/api/v2/login-buyer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        auth: {
          email: data.email,
          deviceUuid: "1213sdsfs456sdsd778sds87787dsd",
        },
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.result.token;
        if (token) {
          localStorage.setItem("token", JSON.stringify(token));
          navigate(redirectPath, { replace: true });
        } else {
          alert(`
          Invalid email & password!
          email : rajib2@gmail.com
          password: 123456
          `);
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <SignInContainer>
      <h1>
        Dhakai Test .<br />
        <span> by Alif Bin Hossain</span>
      </h1>

      <div className="form-content">
        <h1>Sign In</h1>

        {/* -------------------------------------------------------------------------- */
        /*                                SIGN IN FORM                                */
        /* -------------------------------------------------------------------------- */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <div>
              <input
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <small className="required-text">Email is required</small>
              )}
            </div>
          </div>

          <div className="input-box">
            <div>
              <input
                type="password"
                placeholder="Password"
                className="form-input"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <small className="required-text">Password is required</small>
              )}
            </div>
          </div>

          <button className="w-100 btn-custom" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </SignInContainer>
  );
};

export default SignIn;

const SignInContainer = styled.div`
  min-height: 100vh;
  background-color: #157c6b;
  display: flex;
  align-items: center;

  & > * {
    padding: 3rem;
  }

  img {
    width: 5rem;
  }

  h1 {
    flex: 0 0 50%;
    color: #fff;
    font-size: 5rem;
    font-weight: 700;
    line-height: 0.7;
    text-align: right;

    span {
      font-size: 2rem;
      font-weight: 400;
      color: #fafafa;
    }
  }

  .form-content {
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    padding: 3rem;
    border-radius: 8px;
    margin-left: 3rem;

    h1 {
      color: #fff;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .input-box {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      & > * {
        flex: 1;
      }

      div {
        &:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }

    input,
    select {
      display: block;
      border: none;
      padding: 0.8rem 1.4rem;
      border-radius: 3px;
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;

      &::placeholder {
        color: #fff;
      }

      &:focus {
        outline: none;
      }

      &:not(:last-child) {
        margin-right: 1rem;
      }

      option {
        color: #000;
      }
    }

    small {
      font-size: 12px;
      color: #ffffff;
      font-weight: bold;
      display: block;
      margin-top: 8px;
    }

    button {
      display: block;
      padding: 0.6rem 1.2rem;
      width: 100%;
      border: none;
      border-radius: 4px;
      background-color: #000;
      color: #fff;
      font-size: 1rem;
      text-transform: capitalize;
    }
  }

  /* MEDIA QUERY */
  @media (max-width: 768px) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 1rem;

    & > * {
      padding: 0;
    }

    h1 {
      flex: 0 0 100%;
      font-size: 3rem;
      line-height: 0.8;
      text-align: left;

      span {
        font-size: 1.5rem;
      }
    }

    .form-content {
      padding: 3rem 2rem;
      margin: 2rem 0 0 0;

      h1 {
        color: #fff;
        font-size: 2rem;
        text-align: center;
        margin-bottom: 1.5rem;
      }
    }
  }
`;
