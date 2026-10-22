import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditButton } from "./EditButton";
const meta = {
  title: "Visual asset/Edit button",
  component: EditButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EditButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
