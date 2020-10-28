import createNumberMask from "text-mask-addons/dist/createNumberMask";

// Quantity mask input
const QuantityMask = createNumberMask({
  prefix: "",
  suffix: "",
  allowDecimal: false,
  allowNegative: true,
});

export default QuantityMask;
