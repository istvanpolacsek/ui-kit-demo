import type { Meta, StoryObj } from "@storybook/react-vite";
import { MobileTextfieldMaster } from "./MobileTextfieldMaster";
const meta = {
  title: "  ↳ Input Field/.Mobile-Textfield/Master",
  component: MobileTextfieldMaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MobileTextfieldMaster>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    showCountryCode: true,
    showLeftIcon: true,
    showLink: true,
    showRightIcon: true,
  },
};
