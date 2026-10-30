import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddText } from "./AddText";
const meta = {
  title: "Visual asset/Add text",
  component: AddText,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AddText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
