import createNumberMask from "text-mask-addons/dist/createNumberMask";

// Price mask input
const PriceMask = createNumberMask({
  prefix: "",
  suffix: "",
  allowDecimal: false
});

export default PriceMask;
