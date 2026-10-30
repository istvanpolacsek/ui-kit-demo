import type { Meta, StoryObj } from "@storybook/react-vite";
import { RemoveButton } from "./RemoveButton";
const meta = {
  title: "Visual asset/Remove button",
  component: RemoveButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RemoveButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
