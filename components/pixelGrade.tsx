export default function PixelGrade() {
  const data = {
    heading: 'The unseen of spending three years at Pixelgrade',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
    buttonName: 'Learn More',
  };
  return (
    <div className="w-full py-20">
      <div className="grid grid-cols-2">
        <div className="mx-auto md:mx-0">
          <img
            className="object-cover h-[28rem]"
            src="/pixelGrade.jpg"
            alt="image"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="font-semibold text-2xl text-[#4D4D4D] max-w-[27rem]">
              {data.heading}
            </h1>
            <p className="text-xs text-[#4D4D4D] mt-3">{data.description}</p>
            <button className="px-6 py-2 bg-[#4CAF4F] hover:bg-[#] mt-6 rounded-md text-white focus:border focus:border-[#4D4D4D] w-full sm:w-fit">
              {data.buttonName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
