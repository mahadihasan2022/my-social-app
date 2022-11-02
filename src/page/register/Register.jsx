import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const navigate = useNavigate();

  const handleVisitLoginPage = () => {
    navigate("/login");
  };


 

    
  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((result) => {
  //     navigate("/");
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  // }


//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((result) => {
//       // console.log(result);
//       fetch(`https://peaceful-savannah-15152.herokuapp.com/user/${email}`, {
//         method: "PUT",
//         body: JSON.stringify({ name, email, image: null }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           navigate("/Home");
//         });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1> Register Now...</h1>
          <form>
            <input  type="text" placeholder="name" />
            <input type="email" name="" id="" placeholder="email" />
            <input  type="password" name="" id="" placeholder="password" />
            <input
              type="password"
              name=""
              id=""
              placeholder="conform password"
            />
            <button >Sign Up</button>
          </form>
        </div>
        <div className="right">
          <h1>Welcome To Our Website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            veritatis, labore accusamus pariatur quas cumque debitis neque?
            Tempore, perspiciatis officia dicta et reprehenderit fuga animi,
            consequuntur delectus aut quae rerum?
          </p>
          <span>If you have already an account!!</span>
          <button onClick={handleVisitLoginPage}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
