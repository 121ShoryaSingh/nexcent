import React from 'react';

const data = [
  {
    index: 0,
    icon: '/community_1.png',
    heading: 'Membership Organisation',
    description:
      'Our membership management software provides full automation of membetship renewals and payments',
  },
  {
    index: 1,
    icon: '/community_2.png',
    heading: 'National Associations',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
  },
  {
    index: 2,
    icon: '/community_3.png',
    heading: 'Clubs And Groups',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
  },
];

const Community = () => {
  return (
    <div className="w-full mt-6 mb-6">
      <div className="text-center">
        <h1 className=" max-w-sm mx-auto font-semibold text-2xl text-[#4d4d4d]">
          Manage your entire community in a single system
        </h1>
        <p className="mt-1 text-xs text-[#717171]">
          Who is Nextcent Suitable for?
        </p>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col place-items-center mt-3 gap-2">
        {data.map((data) => {
          return (
            <div
              key={data.index}
              className="lg:max-w-xs max-w-sm px-6 py-4 rounded border border-black/5 shadow-md"
            >
              <div className="flex flex-col gap-2 justify-center w-full">
                <img
                  src={data.icon}
                  alt="icon"
                  className="w-11 h-9 mx-auto"
                />
                <h1 className="max-w-44 font-bold text-xl text-[#4d4d4d] text-center mx-auto">
                  {data.heading}
                </h1>
              </div>

              <p className="text-xs text-center mt-1 max-w-52">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
