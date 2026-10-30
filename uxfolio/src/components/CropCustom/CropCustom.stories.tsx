import type { Meta, StoryObj } from "@storybook/react-vite";
import { CropCustom } from "./CropCustom";
const meta = {
  title: "Visual asset/Crop custom",
  component: CropCustom,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CropCustom>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
