import React, { useContext } from "react";

import Card from "./Card";
import { CategoryNameContext } from "../../contexts/CategoryNameContext";

export default function Home() {
	const { categoryNames } = useContext(CategoryNameContext);
	const photoLinkArray = [
		"https://villa-aventura.com/wp-content/uploads/2022/12/Muziek.jpg",
		"https://t4.ftcdn.net/jpg/02/57/33/93/240_F_257339302_LWVM6ZkukZUoVVo8CY0UHx5y283PG9RR.jpg",
		"https://www.electronicdrumadvisor.com/wp-content/uploads/2022/03/Drumming-Glossary-and-Terms.jpg",
		"https://images.unsplash.com/photo-1614413970884-6dba7310bd2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3VpdGFyJTIwcGVkYWx8ZW58MHx8MHx8&w=1000&q=80",
	];

	const paragraphsArray = [
		"Don't get strung on someone else's, get your own strings!",
		"For all your key needs, we have the boards.",
		"'What's more fun than hitting stuff?' - Flea",
		"Not satisfied with the natural, get on your game guttural.",
	];

	const mappedCategories = categoryNames.map((category, index) => {
		return (
			<div
				key={index}
				className="justify-self-center w-full md:w-3/4 lg:w-9/12 xl:w-10/12 mb-8"
			>
				<Card
					category={category}
					paragraph={paragraphsArray[index]}
					image={photoLinkArray[index]}
				/>
			</div>
		);
	});

	return (
		<div className="items-stretch min-h-screen mt-100">

			<div className="self-stretch flex-wrap justify-center mt-36 mx-10 lg:mx-20 mb-10 grid grid-cols-2 gap-8">
				{mappedCategories}
			</div>
		</div>
	);
}


