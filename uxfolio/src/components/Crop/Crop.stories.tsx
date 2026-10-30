import type { Meta, StoryObj } from "@storybook/react-vite";
import { Crop } from "./Crop";
const meta = {
  title: "Visual asset/Crop",
  component: Crop,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Crop>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
