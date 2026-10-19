import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";
const meta = {
  title: "Claude Components/Icon button",
  component: IconButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { icon: "24:461", variant: "Ghost", size: "Default", state: "Default" },
};
