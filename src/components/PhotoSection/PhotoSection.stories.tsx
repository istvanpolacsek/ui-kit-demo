import type { Meta, StoryObj } from "@storybook/react-vite";
import { PhotoSection } from "./PhotoSection";
const meta = {
  title: "  ↳ Sections 🆕/Photo Section",
  component: PhotoSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PhotoSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Web" } };
