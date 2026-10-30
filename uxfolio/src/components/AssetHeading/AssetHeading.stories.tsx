import type { Meta, StoryObj } from "@storybook/react-vite";
import { AssetHeading } from "./AssetHeading";
const meta = {
  title: "Cover/_Asset heading",
  component: AssetHeading,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AssetHeading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Up to date" } };
