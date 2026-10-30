import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewSmallDeviceColor } from "./OptionPreviewSmallDeviceColor";
const meta = {
  title: "Visual asset/Option preview / Small / Device color",
  component: OptionPreviewSmallDeviceColor,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewSmallDeviceColor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { color: "Dark" } };
