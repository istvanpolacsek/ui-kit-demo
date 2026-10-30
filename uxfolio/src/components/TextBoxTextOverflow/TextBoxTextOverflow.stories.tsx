import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextBoxTextOverflow } from "./TextBoxTextOverflow";
const meta = {
  title: "Module/Text box / Text overflow",
  component: TextBoxTextOverflow,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextBoxTextOverflow>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasToolbar: false, reachingLimit: false, mode: "Light" },
};
