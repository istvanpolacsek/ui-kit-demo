import type { Meta, StoryObj } from "@storybook/react-vite";
import { Share } from "./Share";
const meta = {
  title: "Visual asset/Share",
  component: Share,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Share>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
