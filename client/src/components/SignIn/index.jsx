import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function SignIn() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cookies, setCookie, removeCookie] = useCookies([]);

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:8080/api/users/sign_in", {
				email,
				password,
			});
			console.log("Login successful");
			console.log(res.data);
			setCookie("user_id", res.data.user.id);
			setCookie("user_name", res.data.user.first_name, { path: "/" });
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="h-screen">
			<header>
				<h1 className="text-4xl text-center my-16">
					Already have an account? Sign in below!{" "}
				</h1>
			</header>
			<div className="flex justify-center items-center">
				<div className="card lg:card-side bg-primary shadow-xl border-solid border-2 border-black">
					<figure>
						<img
							src="https://media.istockphoto.com/id/465404148/photo/guitar-shop-blurred-background.jpg?s=612x612&w=0&k=20&c=zTrU8_zle1450E0qWY1BbkhNSHX2cMc787q2ufDZldg="
							alt="Store"
						/>
					</figure>
					<div className="card-body border-l-2 border-black">
						<h1 className="text-2xl text-center mb-5">Sign In Here!</h1>
						<form
							className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
							onSubmit={(e) => submitHandler(e)}
						>
							<div className="mb-4">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="email"
									name="email"
									type="text"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="mb-6">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="password"
								>
									Password
								</label>
								<input
									className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
									name="password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="flex items-center justify-between">
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Sign In
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}