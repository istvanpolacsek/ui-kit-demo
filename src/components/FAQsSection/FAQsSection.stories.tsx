import type { Meta, StoryObj } from "@storybook/react-vite";
import { FAQsSection } from "./FAQsSection";
const meta = {
  title: "  ↳ Sections 🆕/FAQs Section",
  component: FAQsSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FAQsSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Web" } };
