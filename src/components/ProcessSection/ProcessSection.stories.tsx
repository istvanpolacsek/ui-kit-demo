import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProcessSection } from "./ProcessSection";
const meta = {
  title: "Section/Process section",
  component: ProcessSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ProcessSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showUI: true, steps: 5 } };
