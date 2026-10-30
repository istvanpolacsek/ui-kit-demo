import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewBackground } from "./TypePreviewBackground";
const meta = {
  title: "Visual asset/Type preview / Background",
  component: TypePreviewBackground,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewBackground>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "None" } };
