import type { Meta, StoryObj } from "@storybook/react-vite";
import { PresetPreviewCaseStudyPreset } from "./PresetPreviewCaseStudyPreset";
const meta = {
  title: "Visual asset/Preset preview / Case study preset",
  component: PresetPreviewCaseStudyPreset,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PresetPreviewCaseStudyPreset>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { presetLayout: "Layout 1" } };
