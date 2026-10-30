import type { Meta, StoryObj } from "@storybook/react-vite";
import { DividerSection } from "./DividerSection";
const meta = {
  title: "Section/Divider section",
  component: DividerSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DividerSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { lineWeight: "313:6227", showUI: true, type: "Top" },
};
