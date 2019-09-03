import Core from "sap/ui/core/Core";
import EChartsControl from "./controls/EChartsControl";
import Page from "sap/m/Page";
import SplitApp from "sap/m/SplitApp";
import Input from "sap/m/Input";
import Label from "sap/m/Label";
import SimpleForm from "sap/ui/layout/form/SimpleForm";
import { GlobalStore } from "./store/Store";
import List from "sap/m/List";
import CustomListItem from "sap/m/CustomListItem";
import BackgroundDesign from "sap/m/BackgroundDesign";

const app = <SplitApp
  masterPages={
    <Page title="Data" backgroundDesign={BackgroundDesign.Transparent} >
      <SimpleForm>
        <List
          items={{
            path: "/EChartsOption/series/0/data",
            template: <CustomListItem content={[
              <Label text="{name}" />,
              <Input value="{value}" valueLiveUpdate={true} />
            ]} />

          }}
        />
      </SimpleForm>
    </Page>
  }
  detailPages={
    <Page title="ECharts" backgroundDesign={BackgroundDesign.Transparent} >
      <EChartsControl option="{/EChartsOption}" />
    </Page>
  }
/>;

Core.attachInit(() => {

  // after init, dom UIArea is available
  app.setModel(GlobalStore).placeAt("content");

});
