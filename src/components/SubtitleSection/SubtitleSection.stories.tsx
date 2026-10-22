import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubtitleSection } from "./SubtitleSection";
const meta = {
  title: "Section/Subtitle section",
  component: SubtitleSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "select",
      options: ["Flexible", "4", "5", "6", "8", "10"],
    },
  },
} satisfies Meta<typeof SubtitleSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showUI: true, type: "Default", size: "8" },
};
