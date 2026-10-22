import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddButton } from "./AddButton";
const meta = {
  title: "Visual asset/Add button",
  component: AddButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AddButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
