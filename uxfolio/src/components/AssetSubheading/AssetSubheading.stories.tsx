import type { Meta, StoryObj } from "@storybook/react-vite";
import { AssetSubheading } from "./AssetSubheading";
const meta = {
  title: "Cover/_Asset subheading",
  component: AssetSubheading,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AssetSubheading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showDescription: false, type: "Up to date" },
};
