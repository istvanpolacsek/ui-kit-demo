import type { Meta, StoryObj } from "@storybook/react-vite";
import { SliderThumb } from "./SliderThumb";
const meta = {
  title: "Button/Slider thumb",
  component: SliderThumb,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SliderThumb>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Enabled" } };
