import type { Meta, StoryObj } from "@storybook/react-vite";
import { CropCircle } from "./CropCircle";
const meta = {
  title: "Visual asset/Crop circle",
  component: CropCircle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CropCircle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
