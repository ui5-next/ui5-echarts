import Control from "sap/ui/core/Control";
import echarts from "echarts";
import RenderManager from "sap/ui/core/RenderManager";

const E_CHARTS = "e_chart";

export default class EChartsControl extends Control {

  metadata = {
    properties: {
      option: {
        type: "object"
      },
      width: {
        type: "sap.ui.core.CSSSize",
        defaultValue: "100%"
      },
      height: {
        type: "sap.ui.core.CSSSize",
        defaultValue: "100%"
      }
    }
  }

  init() {

    super.init();

    this._chartContainerId = this.getIdForLabel(E_CHARTS);

  }

  onAfterRendering() {

    // after render, dom existed
    this._chartRef = echarts.init(document.getElementById(this._chartContainerId));

    // resize chart when the browser size changed
    window.onresize = () => {
      this._chartRef.resize();
    };

    // get option binding
    const oBinding = this.getBinding("option");

    if (oBinding) {

      // with data binding
      // change on dynamic
      // generally, control use getter/setter to update dom
      // but for this control. we use a directly way

      oBinding.attachEvent("change", (e) => {
        this._chartRef.setOption(e.getSource().getValue());
      });

    }

    const oInitOption = this.getOption();

    // with init option value
    if (oInitOption) {
      this._chartRef.setOption(oInitOption);
    }

  }

  renderer(oRM: RenderManager, oControl: EChartsControl) {

    oRM.openStart("div");

    oRM.attr("id", oControl._chartContainerId);
    oRM.style("width", oControl.getWidth());
    oRM.style("height", oControl.getHeight());
    oRM.writeControlData(oControl);
    oRM.writeClasses();

    oRM.openEnd();

    oRM.close("div");
  }

}