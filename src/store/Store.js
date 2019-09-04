import ReduxModel from "./redux/ReduxModel";
import { EChartOption } from "echarts";

// with type
interface AppStateType {
  EChartsOption: EChartOption
}

/**
 * Application initialize state
 */
const AppInitState: AppStateType = {
  EChartsOption: {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 274, name: "联盟广告" },
          { value: 235, name: "视频广告" },
          { value: 400, name: "搜索引擎" }
        ],
        roseType: "radius"
      }
    ]

  }
};

export const GlobalStore = new ReduxModel(AppInitState);
