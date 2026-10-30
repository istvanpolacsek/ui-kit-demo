import type { Meta, StoryObj } from "@storybook/react-vite";
import { FontColor } from "./FontColor";
const meta = {
  title: "Visual asset/Font color",
  component: FontColor,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FontColor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
