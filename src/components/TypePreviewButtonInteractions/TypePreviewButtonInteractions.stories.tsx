import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewButtonInteractions } from "./TypePreviewButtonInteractions";
const meta = {
  title: "Visual asset/Type preview / Button interactions",
  component: TypePreviewButtonInteractions,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewButtonInteractions>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "No link" } };
