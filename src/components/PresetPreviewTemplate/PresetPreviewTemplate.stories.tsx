import type { Meta, StoryObj } from "@storybook/react-vite";
import { PresetPreviewTemplate } from "./PresetPreviewTemplate";
const meta = {
  title: "Visual asset/Preset preview / Template",
  component: PresetPreviewTemplate,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PresetPreviewTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { template: "Tesler" } };
