import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewNavigation } from "./TypePreviewNavigation";
const meta = {
  title: "Visual asset/Type preview / Navigation",
  component: TypePreviewNavigation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewNavigation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Simple" } };
