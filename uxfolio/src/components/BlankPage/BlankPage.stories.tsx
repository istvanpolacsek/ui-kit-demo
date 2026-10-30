import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlankPage } from "./BlankPage";
const meta = {
  title: "Visual asset/Blank page",
  component: BlankPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BlankPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
