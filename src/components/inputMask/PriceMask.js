import createNumberMask from "text-mask-addons/dist/createNumberMask";

// Price mask input
const PriceMask = createNumberMask({
  prefix: "",
  suffix: "",
  allowDecimal: true
});

export default PriceMask;
