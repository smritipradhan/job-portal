import {
  Card,
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { IFilterComponent } from "./types";

const FilterComponent = (props: IFilterComponent) => {
  const { companyData, onChangeHandler } = props;

  return (
    <>
      <div className="p-3 color-EDEDED ">
        <div className="text-sm">{companyData?.type}</div>
        <Card>
          <List>
            {Array.isArray(companyData.data) &&
              companyData.data?.length &&
              companyData.data?.map((company: any) => {
                return (
                  <ListItem className="p-0 flex-col" key={company?.filterId}>
                    <label className="flex w-full cursor-pointer ">
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          checked={company?.value}
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-1 my-auto flex",
                          }}
                          crossOrigin={undefined}
                          onChange={(e) =>
                            onChangeHandler(e, companyData?.type, company?.name)
                          }
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="text-xs">
                        {company?.name}
                      </Typography>
                    </label>
                  </ListItem>
                );
              })}
          </List>
        </Card>
      </div>
      <div className="border-b-2 border-gray-700"></div>
    </>
  );
};

export default FilterComponent;
