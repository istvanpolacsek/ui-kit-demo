import type { Meta, StoryObj } from "@storybook/react-vite";
import { Paste } from "./Paste";
const meta = {
  title: "Visual asset/Paste",
  component: Paste,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Paste>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
