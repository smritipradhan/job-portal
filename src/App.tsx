import { Button } from "@mui/material";
import { useEffect } from "react";

import { deleteData, getData, postData, putData } from "./utils/apiUtils";
import { ErrorBoundary } from "react-error-boundary";
import FilterBySidebar from "./components/FilterBySidebar";
import SearchResultsMainContainer from "./components/SearchResultsMainContainer";
import Headers from "./components/Header";

const App = () => {
  useEffect(() => {
    console.log("Start");
    const d = getData("");
    console.log({ d });
  }, []);

  const postCallHandler = async () => {
    try {
      const data = await postData("", {
        name: "Dummy Call for POST !!",
        rating: 6.7,
        price: 500,
      });
      console.log({ data });
    } catch (err) {
      console.log(err);
    }
  };

  const getCallHandler = async () => {
    try {
      const data = await getData("/6572f641bd65c8971a1a24d4");
      console.log({ data });
    } catch (err) {
      console.log(err);
    }
  };

  const putCallHandler = async () => {
    try {
      const data = await putData("/6572f641bd65c8971a1a24d4", {
        rating: 10,
        price: 2000,
      });
      console.log({ data });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCallHandler = async () => {
    try {
      const data = await deleteData("/6576f31c64b1819bb861b605");
      console.log({ data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Headers />
      <div className="bg-[#171C28] flex p-11 gap-9 justify-center">
        <FilterBySidebar />
        <SearchResultsMainContainer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
