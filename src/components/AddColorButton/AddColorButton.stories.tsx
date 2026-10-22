import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddColorButton } from "./AddColorButton";
const meta = {
  title: "Button/Add color button",
  component: AddColorButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AddColorButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
