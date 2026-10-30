import type { Meta, StoryObj } from "@storybook/react-vite";
import { Email } from "./Email";
const meta = {
  title: "Visual asset/Email",
  component: Email,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Email>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
