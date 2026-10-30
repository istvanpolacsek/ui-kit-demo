import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditLink } from "./EditLink";
const meta = {
  title: "Visual asset/Edit link",
  component: EditLink,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EditLink>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
