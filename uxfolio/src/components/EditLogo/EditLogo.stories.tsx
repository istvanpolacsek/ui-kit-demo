import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditLogo } from "./EditLogo";
const meta = {
  title: "Visual asset/Edit logo",
  component: EditLogo,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EditLogo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
