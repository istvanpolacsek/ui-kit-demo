import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditPages } from "./EditPages";
const meta = {
  title: "Visual asset/Edit pages",
  component: EditPages,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EditPages>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
