import React from 'react';

const data = [
  {
    index: 0,
    icon: '/community_1.png',
    heading: 'Membership Organisation',
    description:
      'Our membership management software provides full automation if membetship renewals and payments',
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
    <div className="w-full pt-7">
      <div className="w-full flex flex-col text-center gap-5">
        <h1 className="mx-auto text-2xl font-semibold text-[#4d4d4d] text-wrap w-[23.5625rem]">
          Manage your entire community in single system
        </h1>
        <p className="text-xs text-[#717171]">Who is Nextcent Suitable for?</p>
      </div>
      <div className="flex justify-around pt-3 h-52 gap-20">
        {data.map((data) => {
          return (
            <div
              key={data.index}
              className="w-52 h-[11.38125rem]"
            >
              <div className="flex flex-col gap-3 justify-center w-full">
                <img
                  src={data.icon}
                  alt="icon"
                  className="w-11 h-9 mx-auto"
                />
                <h1 className="font-bold text-xl text-[#4d4d4d] text-center">
                  {data.heading}
                </h1>
              </div>

              <p className="text-xs text-center pt-1">{data.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
