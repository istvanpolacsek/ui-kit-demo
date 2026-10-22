import type { Meta, StoryObj } from "@storybook/react-vite";
import { TopSpacer } from "./TopSpacer";
const meta = {
  title: "Visual asset/Top spacer",
  component: TopSpacer,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TopSpacer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
