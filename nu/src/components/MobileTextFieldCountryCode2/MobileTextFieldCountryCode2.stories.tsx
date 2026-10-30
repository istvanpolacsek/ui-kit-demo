import type { Meta, StoryObj } from "@storybook/react-vite";
import { MobileTextFieldCountryCode2 } from "./MobileTextFieldCountryCode2";
const meta = {
  title: "  ↳ Input Field/Mobile / Text Field / Country Code 2",
  component: MobileTextFieldCountryCode2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MobileTextFieldCountryCode2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
