import GearGrid from "../components/GearGrid";
import type { GearItem } from "../types";

export default function MySetup() {
  const MyGear: GearItem[] = [
    {
      itemName: "M5 MacBook Pro",
      url: "https://support.apple.com/en-us/125405",
      desc: "In space black. It's very nice :D",
    },
    {
      itemName: "Keychron V1",
      url: "https://www.keychron.com/products/keychron-v1-qmk-via-custom-mechanical-keyboard",
      desc: "Customised QMK firmware and it a volume knob!",
    },
    {
      itemName: "Logi MX Master 3S",
      url: "https://www.logitech.com/en-nz/shop/p/mx-master-3s",
      desc: "It's really comfortable.",
    },
    {
      itemName: "Some DELL monitor",
      desc: "I'm not sure what model.",
    },
    {
      itemName: "iPhone 16e",
      url: "https://www.apple.com/iphone-16e/specs/",
      desc: "I don't have a phone case.",
    },
    {
      itemName: "Apple Watch SE (2nd Generation)",
      url: "https://support.apple.com/en-nz/111853",
      desc: "I have a few bands too.",
    },
    {
      itemName: "CMF Buds Pro 2",
      url: "https://intl.nothing.tech/products/cmf-buds-pro-2?Colour=Dark+Grey",
      desc: "I got them from Hack Club's Summer of Making!",
    },
    {
      itemName: "Rubber Duck with a laptop",
      url: "https://sunnysideducks.com.au/products/rubber-duck-with-notebook-rubber-duck?_pos=1&_sid=9f2f6d086&_ss=r",
      desc: "Got it with a grant from Summer of Making!",
    },
  ];

  return (
    <div
      id="my-setup"
      className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 mx-4"
    >
      <h1 className="text-3xl font-bold pt-10">My Setup</h1>
      <GearGrid gearItems={MyGear} />
    </div>
  );
}
