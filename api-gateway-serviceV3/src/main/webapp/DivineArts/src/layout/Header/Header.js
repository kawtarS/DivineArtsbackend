import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
	MenuIcon,
	SearchIcon,
	ShoppingBagIcon,
	XIcon,
	UserIcon,
} from "@heroicons/react/outline";
import navigation from "data/Navigation";
import Logo from "assets/logo-white.png";
import Cart from "./components/Cart";
import SideBar from "./components/Sidebar";
import { Link } from "react-router-dom";

function ClassNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Header = () => {
	let location = useLocation();
	const [open, setOpen] = useState(false);
	const [transparent, setTransparent] = useState(
		location.pathname === "/" ? true : false
	);
	const [openSearch, setOpenSearch] = useState(false);
	const [openCart, setOpenCart] = useState(false);
	const [activeMenu, setActiveMenu] = useState("main");
	window.addEventListener("scroll", () => {
		if (window.scrollY >= 150) {
			setTransparent(false);
		} else {
			setTransparent(true);
		}
	});

	return (
		<>
			{/* Mobile Menu  */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog open={open} as="div" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<div className="fixed inset-y-0 w-72 z-40 lg:hidden bg-dark overflow-hidden">
							<SideBar setOpen={setOpen} />
						</div>
					</Transition.Child>
				</Dialog>
			</Transition.Root>

			<header className="z-20 fixed w-full">
				<p className="bg-black h-8 flex items-center justify-center text-xs font-semibold tracking-wider text-gray-100 px-4 sm:px-6 lg:px-8">
					LIVRAISON À L’INTERNATIONAL - RETOURS GRATUITS
				</p>
				<div
					className={`w-full ${
						!(transparent && location.pathname === "/") ? "bg-black" : ""
					}`}
				>
					<nav
						aria-label="Top"
						className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 "
					>
						<div className="border-b border-gray-200">
							<div className="h-16 flex justify-between">
								<button
									type="button"
									className="bg-transparent p-2 rounded-md text-white lg:hidden"
									onClick={() => setOpen(true)}
								>
									<span className="sr-only">Open menu</span>
									<MenuIcon className="h-6 w-6" aria-hidden="true" />
								</button>

								{/* Logo */}
								<Link to="/">
									<div className="ml-4 flex lg:ml-0">
										<a>
											<span className="sr-only">Divine Arts</span>
											<img className="h-14 md:h-16 w-auto" src={Logo} alt="" />
										</a>
									</div>
								</Link>

								{/* Flyout menus */}
								<Popover.Group className="hidden lg:mr-14 lg:block lg:self-stretch">
									<div className="h-full flex space-x-8">
										{navigation.categories.map((category) => (
											<Popover key={category.name} className="flex">
												{({ open }) => (
													<>
														<div className="relative flex lg:mr-14">
															<Popover.Button
																className={ClassNames(
																	open
																		? "border-yellow-200 text-yellow-200"
																		: "border-transparent text-gray-200 hover:text-gray-300",
																	"relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-b-2 -mb-px pt-px"
																)}
															>
																{category.name}
															</Popover.Button>
														</div>

														<Transition
															as={Fragment}
															enter="transition ease-out duration-200"
															enterFrom="opacity-0"
															enterTo="opacity-100"
															leave="transition ease-in duration-150"
															leaveFrom="opacity-100"
															leaveTo="opacity-0"
														>
															<Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
																{/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
																<div
																	className="absolute inset-0 top-1/2 bg-white shadow"
																	aria-hidden="true"
																/>

																<div className="relative bg-white">
																	<div className="max-w-7xl mx-auto px-8">
																		<div className="grid grid-cols-2 gap-y-10 gap-x-8 py-10">
																			<div className="col-start-2 grid grid-cols-2 gap-x-8">
																				{/* Featured */}
																				{category.featured.map((item) => (
																					<div
																						key={item.name}
																						className="group relative text-base sm:text-sm"
																					>
																						<div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
																							<img
																								src={item.imageSrc}
																								alt={item.imageAlt}
																								className="object-center object-cover"
																							/>
																						</div>
																						<a
																							href={item.href}
																							className="mt-6 block font-medium text-gray-900"
																						>
																							<span
																								className="absolute z-10 inset-0"
																								aria-hidden="true"
																							/>
																							{item.name}
																						</a>
																						<p
																							aria-hidden="true"
																							className="mt-1"
																						>
																							Shop now
																						</p>
																					</div>
																				))}
																			</div>
																			<div
																				className={`row-start-1 grid grid-cols-${category.sections.length.toString()} gap-y-10 gap-x-8 text-sm`}
																			>
																				{/* Sections */}
																				{category.sections.map((section) => (
																					<div key={section.name}>
																						<p
																							id={`${section.name}-heading`}
																							className="font-medium text-gray-900"
																						>
																							{section.name}
																						</p>
																						{section.hasOwnProperty(
																							"subSections"
																						) ? (
																							section.subSections.map(
																								(subSection) => (
																									<>
																										<p
																											id={`${subSection.name}-heading`}
																											className="font-medium text-gray-700 pt-2"
																										>
																											{subSection.name}
																										</p>
																										<ul
																											role="list"
																											aria-labelledby={`${section.name}-heading`}
																											className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																										>
																											{subSection.items.map(
																												(item) => (
																													<li
																														key={item.name}
																														className="flex"
																													>
																														<a
																															href={item.href}
																															className="hover:text-gray-800"
																														>
																															{item.name}
																														</a>
																													</li>
																												)
																											)}
																										</ul>
																									</>
																								)
																							)
																						) : (
																							<ul
																								role="list"
																								aria-labelledby={`${section.name}-heading`}
																								className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																							>
																								{section.items.map((item) => (
																									<li
																										key={item.name}
																										className="flex"
																									>
																										<a
																											href={item.href}
																											className="hover:text-gray-800"
																										>
																											{item.name}
																										</a>
																									</li>
																								))}
																							</ul>
																						)}
																					</div>
																				))}
																			</div>
																		</div>
																	</div>
																</div>
															</Popover.Panel>
														</Transition>
													</>
												)}
											</Popover>
										))}

										{/* {navigation.pages.map((page) => (
                        <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                        {page.name}
                        </a>
                    ))} */}
									</div>
								</Popover.Group>

								<div className="flex">
									{/* Search */}
									<div className="" onClick={() => setOpenSearch(true)}>
										<a className="p-2 text-gray-200 hover:text-gray-300 cursor-pointer">
											{/* <span className="sr-only">Search</span> */}
											<SearchIcon className="w-6 h-6" aria-hidden="true" />
										</a>
									</div>

									{/* User */}
									<div className="ml-2 md:ml-3">
										<a href="#" className="group p-2 ">
											<UserIcon className="w-6 h-6 text-gray-200 group-hover:text-gray-300" />
										</a>
									</div>

									{/* Cart */}
									<div
										className="flow-root ml-2 md:ml-3 relative"
										onClick={() => setOpenCart(true)}
									>
										<a href="#" className="group -m-2 p-2">
											<ShoppingBagIcon
												className="flex-shink-0 h-6 w-6 text-gray-200 group-hover:text-gray-300"
												aria-hidden="true"
											/>
											<span className="text-xs font-medium text-gray-700 group-hover:text-gray-800 bg-yellow-200 px-1 rounded-xl absolute top-5 left-4">
												0
											</span>
										</a>
									</div>

									{/* Search Container */}
									<div
										className={`flex items-center justify-between py-2 px-3 absolute bottom-3 right-7 mx-auto text-white rounded-full bg-gray-800 ${
											openSearch ? "" : "hidden"
										}`}
									>
										<SearchIcon className="w-5 h-5" aria-hidden="true" />
										<input
											className="bg-transparent text-sm focus:outline-none mx-2"
											type="text"
											name="search"
											placeholder="Tapez ici votre recherche"
										/>
										<button
											type="submit"
											className=""
											onClick={() => setOpenSearch(false)}
										>
											<XIcon className="h-5 w-5" />
										</button>
									</div>
									{/* Cart Container */}
									<div className="">
										<Cart open={openCart} setOpen={setOpenCart} />
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
