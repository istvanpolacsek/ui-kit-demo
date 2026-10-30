import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stop } from "./Stop";
const meta = {
  title: "Visual asset/Stop",
  component: Stop,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Stop>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
