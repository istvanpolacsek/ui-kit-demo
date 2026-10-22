import type { Meta, StoryObj } from "@storybook/react-vite";
import { Public } from "./Public";
const meta = {
  title: "Visual asset/Public",
  component: Public,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Public>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
