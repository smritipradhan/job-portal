import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import SadEmoji from "./../assets/images/sadEmoji.png";

const SearchResultsMainContainer = () => {
  const { filteredData } = useSelector((state: any) => state.jobFilter);

  return (
    <div
      className="bg-[#1D2331] rounded-md p-8 flex flex-col gap-6"
      style={{ width: "906px" }}
    >
      {Array.isArray(filteredData) && filteredData.length !== 0 ? (
        filteredData?.map((cardData) => {
          return (
            <div className="rounded-xl box-border">
              <div className="bg-[#323C52] p-6 flex justify-between relative">
                <div className="flex gap-7">
                  <div className="w-20 h-20 bg-[#FFF] rounded-2xl"></div>
                  <div>
                    <Typography className="color-E3F1FD text-xl font-bold">
                      {cardData.jobRole}
                    </Typography>
                    <Typography className="color-E3F1FD  text-base">
                      {cardData?.company}
                    </Typography>
                    <Typography className="color-E3F1FD text-base">
                      {cardData?.location} , India
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-8">
                  <Typography className="color-E3F1FD font-bold text-base flex my-auto ">
                    Skills match
                  </Typography>

                  <div
                    x-data="scrollProgress"
                    className="rounded-full bottom-5 left-5 flex  overflow-hidden"
                  >
                    <svg className="w-20 h-20">
                      <circle
                        className="color-E83363"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="40"
                        cy="40"
                      />
                      <circle
                        className="color-5CA4A9"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        stroke-dasharray={80}
                        stroke-dashoffset={10}
                        r="30"
                        cx="40"
                        cy="40"
                      />
                    </svg>
                    <span
                      className="absolute text-xl top-12 right-11  text-white font-semibold"
                      // x-text="20%"
                    >
                      78%
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[#525d79] px-6 py-4">
                <div className="flex gap-2 color-E3F1FD text-base">
                  <Typography> {cardData?.datePosted}</Typography>
                  <Typography>.</Typography>
                  <Typography>10 applicants</Typography>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex justify-center flex-col mx-auto">
          <Typography className="text-[#FFF] mx-auto">
            Sorry ! No Data Found
          </Typography>
          <img src={SadEmoji} className="h-40 w-40" alt="Sad Emoji" />
        </div>
      )}
    </div>
  );
};

export default SearchResultsMainContainer;
