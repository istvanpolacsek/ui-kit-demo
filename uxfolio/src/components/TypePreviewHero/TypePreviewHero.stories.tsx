import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewHero } from "./TypePreviewHero";
const meta = {
  title: "Visual asset/Type preview / Hero",
  component: TypePreviewHero,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewHero>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Modular" } };
