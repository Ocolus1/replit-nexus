import React from 'react';

export default function index() {
	return (
		<div>
			<section className="section-blue-purple text-[#8C8C8C] bg-[#030C14] body-font">
				<div className="bg-[#030C14]/[0.4] min-h-dvh pb-4 md:pb-28 lg:p-0 flex flex-col pt-20 md:pt-40 lg:pt-1">
					<div className="container mx-auto flex items-start md:items-center justify-center flex-col max-w-screen-md px-9 lg:pt-40 md:px-1">
						<div className="bg-gradient-to-r p-px from-[#0500E8] to-[#7000FF] rounded-full mb-3">
							<button className="bg-[#1F1F1F] rounded-full py-2 px-8 md:px-6 text-xl ">
								<span className="bg-gradient-to-r from-[#A5A2E8] to-[#7000FF] font-bold inline-block text-transparent bg-clip-text">
									Get Access
								</span>
							</button>
						</div>
						<div className="md:text-center w-full">
							<h3 className="text-[#A5A2E8] text-lg md:text-3xl font-bold my-3">
								Choose the Perfect Plan for You
							</h3>
							<div className="justify-center flex ">
								<p className="leading-relaxed mb-8 lg:w-3/5 text-sm md:text-center text-[#817EB5]">
									Experience all the benefits of our platform
									starting at just $12.99 per month, Select
									the plan that suits your needs and take your
									productivity to new heights.
								</p>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex justify-center">
							<div className="w-full px-5 md:px-1 md:w-1/2 flex flex-col md:flex-row py-6 justify-center gap-x-5 relative ">
								<svg
									className="flex w-full lg:hidden absolute -left-12 rounded-full bottom-20 shadow-2xl"
									width="320"
									height="491"
									viewBox="0 0 320 491"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g
										opacity="0.2"
										filter="url(#filter0_f_130_900)"
									>
										<ellipse
											cx="399.5"
											cy="404.5"
											rx="249.5"
											ry="254.5"
											fill="#5000B5"
										/>
									</g>
									<defs>
										<filter
											id="filter0_f_130_900"
											x="0"
											y="0"
											width="799"
											height="809"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB"
										>
											<feFlood
												flood-opacity="0"
												result="BackgroundImageFix"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="BackgroundImageFix"
												result="shape"
											/>
											<feGaussianBlur
												stdDeviation="75"
												result="effect1_foregroundBlur_130_900"
											/>
										</filter>
									</defs>
								</svg>
								<svg
									className="hidden lg:flex absolute inset-x-0 bottom-4 left-1/3 rounded-full shadow-2xl "
									width="499"
									height="509"
									viewBox="0 0 499 509"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g
										opacity="0.2"
										filter="url(#filter0_f_130_900)"
									>
										<ellipse
											cx="399.5"
											cy="404.5"
											rx="249.5"
											ry="254.5"
											fill="#5000B5"
										/>
									</g>
									<defs>
										<filter
											id="filter0_f_130_900"
											x="0"
											y="0"
											width="799"
											height="809"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB"
										>
											<feFlood
												flood-opacity="0"
												result="BackgroundImageFix"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="BackgroundImageFix"
												result="shape"
											/>
											<feGaussianBlur
												stdDeviation="75"
												result="effect1_foregroundBlur_130_900"
											/>
										</filter>
									</defs>
								</svg>

								<div className="p-4 z-50 lg:w-80 w-full">
									<div className="h-full p-6 rounded-lg bg-[#030C14]/[0.4] border border-[#27335F] flex flex-col relative overflow-hidden">
										<h1 className="text-3xl text-[#F0F0F0] pb-4 mb-4 font-bold leading-none">
											Free Plan
										</h1>
										<p className="text-[#F0F0F0] text-2xl font-medium">
											$0
										</p>
										<p className="text-[#595959] text-sm pt-1 pb-2">
											Limited block trails for teams
										</p>
										<button className="bg-gradient-to-b from-[#000000] to-[#282637] mt-1 mb-5 rounded-md py-2 px-4">
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#8D8C95] ">
												Get Started
											</span>
										</button>
										<p className="flex items-center text-gray-400 mb-2">
											<span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-[#5C79E1] rounded-full flex-shrink-0">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2.5"
													className="w-3 h-3"
													viewBox="0 0 24 24"
												>
													<path d="M20 6L9 17l-5-5"></path>
												</svg>
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#8D8C95] ">
												Unlimited blocks for teams
											</span>
										</p>
										<p className="flex items-center text-gray-400 mb-2">
											<span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-[#5C79E1] rounded-full flex-shrink-0">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2.5"
													className="w-3 h-3"
													viewBox="0 0 24 24"
												>
													<path d="M20 6L9 17l-5-5"></path>
												</svg>
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#8D8C95] ">
												Unlimited file uploads
											</span>
										</p>
										<p className="flex items-center text-gray-400 mb-2">
											<span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-[#5C79E1] rounded-full flex-shrink-0">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2.5"
													className="w-3 h-3"
													viewBox="0 0 24 24"
												>
													<path d="M20 6L9 17l-5-5"></path>
												</svg>
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#8D8C95] ">
												30 day page history
											</span>
										</p>
										<p className="flex items-center text-gray-400 mb-6">
											<span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-[#5C79E1] rounded-full flex-shrink-0">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2.5"
													className="w-3 h-3"
													viewBox="0 0 24 24"
												>
													<path d="M20 6L9 17l-5-5"></path>
												</svg>
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#8D8C95] ">
												Invite 100 guests
											</span>
										</p>
									</div>
								</div>
								<div className="p-4 z-50 lg:w-80 w-full">
									<div className="h-full p-6 rounded-lg bg-[#030C14]/[0.4] border border-[#27335F] flex flex-col relative overflow-hidden">
										<img
											src="/icon/diamond.png"
											className="absolute top-5 right-5 h-4 w-4"
										/>
										<h1 className="text-3xl text-[#F0F0F0] pb-4 mb-4 font-bold leading-none">
											Pro Plan
										</h1>
										<p className="text-[#F0F0F0] text-2xl font-medium">
											$12.99
											<span className="text-[#595959] text-sm pt-1 pb-2">
												/mo
											</span>
										</p>
										<p className="text-[#595959] text-sm pt-1 pb-2">
											Billed annually $17 billed monthly
										</p>
										<button className="bg-gradient-to-b from-[#000000] to-[#282637] mt-1 mb-5 rounded-md py-2 px-4">
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#8D8C95] ">
												Get Started
											</span>
										</button>
										<p className="flex items-center text-gray-400 mb-2">
											<span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-[#5C79E1] rounded-full flex-shrink-0">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2.5"
													className="w-3 h-3"
													viewBox="0 0 24 24"
												>
													<path d="M20 6L9 17l-5-5"></path>
												</svg>
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#8D8C95] ">
												Everything in free +
											</span>
										</p>
										<p className="flex items-center text-gray-400 mb-2">
											<span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-[#5C79E1] rounded-full flex-shrink-0">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2.5"
													className="w-3 h-3"
													viewBox="0 0 24 24"
												>
													<path d="M20 6L9 17l-5-5"></path>
												</svg>
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#8D8C95] ">
												Unlimited blocks for teams
											</span>
										</p>
										<p className="flex items-center text-gray-400 mb-2">
											<span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-[#5C79E1] rounded-full flex-shrink-0">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2.5"
													className="w-3 h-3"
													viewBox="0 0 24 24"
												>
													<path d="M20 6L9 17l-5-5"></path>
												</svg>
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#8D8C95] ">
												Unlimited file uploads
											</span>
										</p>
										<p className="flex items-center text-gray-400 mb-2">
											<span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-[#5C79E1] rounded-full flex-shrink-0">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2.5"
													className="w-3 h-3"
													viewBox="0 0 24 24"
												>
													<path d="M20 6L9 17l-5-5"></path>
												</svg>
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#8D8C95] ">
												30 day page history
											</span>
										</p>
										<p className="flex items-center text-gray-400 mb-6">
											<span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-[#5C79E1] rounded-full flex-shrink-0">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2.5"
													className="w-3 h-3"
													viewBox="0 0 24 24"
												>
													<path d="M20 6L9 17l-5-5"></path>
												</svg>
											</span>
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#8D8C95] ">
												Invite 100 guests
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
