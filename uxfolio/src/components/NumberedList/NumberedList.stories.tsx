import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberedList } from "./NumberedList";
const meta = {
  title: "Visual asset/Numbered list",
  component: NumberedList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NumberedList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
