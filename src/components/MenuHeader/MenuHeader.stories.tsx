import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuHeader } from "./MenuHeader";
const meta = {
  title: "Menu/Menu Header",
  component: MenuHeader,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MenuHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
