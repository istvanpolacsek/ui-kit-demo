import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewSmallDeviceStyles } from "./OptionPreviewSmallDeviceStyles";
const meta = {
  title: "Visual asset/Option preview / Small / Device styles",
  component: OptionPreviewSmallDeviceStyles,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewSmallDeviceStyles>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "None" } };
