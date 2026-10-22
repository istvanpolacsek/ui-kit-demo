import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkAdd } from "./LinkAdd";
const meta = {
  title: "Visual asset/Link add",
  component: LinkAdd,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LinkAdd>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
