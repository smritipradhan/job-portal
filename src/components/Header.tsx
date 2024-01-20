import { AiFillBell, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../store/slices/jobFilterSlice";

const Headers = () => {
  const dispatch = useDispatch();
  const { searchedValue } = useSelector((state: any) => state.jobFilter);

  const handleSearchedValue = (event: any) => {
    const { value } = event?.target;
    dispatch(filterActions.setSearchedValue(value));
  };

  return (
    <header className="top-0 w-full z-10 flex items-center h-20 text-white bg-[#303B54] py-5 px-20">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center gap-2 ">
          <p className="text-xl">Jobs</p>
        </div>
        <div className="flex  w-full items-center justify-center relative ">
          <div className="flex w-full md:w-3/5 items-center justify-center relative rounded-l-full ">
            <input
              value={searchedValue}
              type="text"
              className="py-2 px-5  w-full  text-white  outline-none  border-none 
               bg-[#242D40]  border-white rounded-l-full"
              onChange={(event) => handleSearchedValue(event)}
            />

            <button className="bg-[#242D40] px-4 py-2 color-EDEDED rounded-r-full hover:bg-[#303B54]">
              <AiOutlineSearch className="text-2xl " />
            </button>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div className="hidden md:flex ml-2 p-1 justify-center rounded-full bg-transparent hover:bg-[#242D40]  transform cursor-pointer duration-150 transition-all ease-in ">
            <AiOutlineUser className="text-3xl" />
          </div>
          <div className="md:flex ml-2 p-1 flex justify-center rounded-full bg-transparent hover:bg-[#242D40]  transform cursor-pointer duration-150 transition-all ease-in">
            <AiFillBell className="text-3xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
