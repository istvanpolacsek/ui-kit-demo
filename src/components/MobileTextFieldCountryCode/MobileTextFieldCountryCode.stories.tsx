import type { Meta, StoryObj } from "@storybook/react-vite";
import { MobileTextFieldCountryCode } from "./MobileTextFieldCountryCode";
const meta = {
  title: "  ↳ Input Field 🆕/Mobile / Text Field / Country Code",
  component: MobileTextFieldCountryCode,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MobileTextFieldCountryCode>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
