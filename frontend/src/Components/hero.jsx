function HeroSection() {
    return (
        <>
            <div className="grid grid-cols-2">
                <div className=" flex flex-col gap-8 items-center py-35 ">

                    {/* Heading */}
                    <h1 className="text-5xl  w-120 font-bold ">Your Daily Dose of Inspiration</h1>

                    {/* Sub-headings */}
                    <div>
                    <p className="font-semibold w-120 text-gray-500">Because one spark is enough to start a fire.</p>
                    <p className="font-semibold w-120 text-gray-500">Let each post inspire, challenge,</p>
                    <p className="font-semibold w-120 text-gray-500">And push you closer to your best self.</p>
                    </div>
                </div>

                {/* img */}
                <div className="">
                    <img src="./Images/header_img.png" alt="img" className="h-120 object-contain " />
                </div>
            </div>
        </>
    )
}

export default HeroSection;