import type { Meta, StoryObj } from "@storybook/react-vite";
import { Web } from "./Web";
const meta = {
  title: "Visual asset/Web",
  component: Web,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Web>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
