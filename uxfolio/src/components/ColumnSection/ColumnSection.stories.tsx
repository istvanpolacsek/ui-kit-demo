import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColumnSection } from "./ColumnSection";
const meta = {
  title: "Section/Column section",
  component: ColumnSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ColumnSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showUI: true, columns: 2 } };
