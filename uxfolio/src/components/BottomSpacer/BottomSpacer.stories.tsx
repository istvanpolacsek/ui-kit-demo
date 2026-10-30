import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomSpacer } from "./BottomSpacer";
const meta = {
  title: "Visual asset/Bottom spacer",
  component: BottomSpacer,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BottomSpacer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
