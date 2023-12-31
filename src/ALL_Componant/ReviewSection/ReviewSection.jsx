

const ReviewSection = () => {
    return (
        <div>


            <div className=" text-center items-center mx-auto">

                <div className="pt-5">
                    <h2 className="text-4xl  underline font-extrabold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <span className=" text-amber-600">  Here </span>is our  Client Reviews </h2>

                    <div className=" text-center ">
                        <p className=" pb-10 text-center lg:w-[700px] mx-auto font-sans text-base font-light leading-relaxed text-inherit antialiased">Welcome to our Technology and Electronics Brand Shop, where innovation and cutting-edge products meet your needs and desires. We are your one-stop destination for the latest and most trusted technology and electronics products on the market.</p>
                    </div>

                </div>

            </div>




            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  bg-[url(https://i.ibb.co/jMcNC8s/game-development.png)] w-full h-full  ">


                <div className=" mt-10 mb-10 bg-blue-200 border border-solid border-cyan-400  container flex flex-col w-[400px] max-w-lg p-6 mx-auto divide-y  rounded-md divide-gray-700 dark:bg-black ">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <span className="text-xs dark:text-gray-950">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold text-[#2563EB]">4.5</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-950">
                        <p>This store boasts a diverse range of products, from the latest smartphones and laptops to gaming consoles and accessories. Whatever you're looking for, they've got it</p>
                        <p> I was particularly impressed with their attention to detail when it comes to choosing top-notch brands and models. </p>
                    </div>
                </div>

                {/* card 2 */}
                <div className=" mt-10 mb-10 bg-blue-200 border border-solid border-cyan-400  container flex flex-col w-[400px] max-w-lg p-6 mx-auto divide-y  rounded-md divide-gray-700 dark:bg-black ">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <span className="text-xs dark:text-gray-950">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold text-[#2563EB]">4.5</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-950">
                        <p>The staff here is incredibly knowledgeable and friendly. They're always ready to answer questions, provide recommendations, and even explain the nitty-gritty technical details. I had a specific laptop in mind, and the sales representative went above and beyond to guide me through the available options, helping me make an informed decision. </p>
                        <p>One of my biggest concerns when shopping for electronics is authenticity. But with Cr. Brand Shop, that's never a worry. </p>
                    </div>
                </div>
                {/* card 3 */}
                <div className=" mt-10 mb-10 bg-blue-200 border border-solid border-cyan-400  container flex flex-col w-[400px] max-w-lg p-6 mx-auto divide-y  rounded-md divide-gray-700 dark:bg-black ">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <span className="text-xs dark:text-gray-950">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold text-[#2563EB]">4.5</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-950">
                        <p>Their website is intuitive and easy to use, making the shopping process straightforward. I had my new laptop delivered within a few days, and the packaging was secure and well-handled.</p>
                        <p>Overall, my experience with [Technology and Electronics Brand Shop] has been outstanding. I'm thoroughly satisfied with my purchase, and I'll definitely be returning for all my tech needs.</p>
                    </div>
                </div>



            </div>



        </div>
    );
};

export default ReviewSection;