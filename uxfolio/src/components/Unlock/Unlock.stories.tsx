import type { Meta, StoryObj } from "@storybook/react-vite";
import { Unlock } from "./Unlock";
const meta = {
  title: "Visual asset/Unlock",
  component: Unlock,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Unlock>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
