import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link2 } from "./Link2";
const meta = {
  title: "Visual asset/Link 2",
  component: Link2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Link2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
