import type { Meta, StoryObj } from "@storybook/react-vite";
import { PDFResum } from "./PDFResum";
const meta = {
  title: "Visual asset/PDF resumé",
  component: PDFResum,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PDFResum>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
