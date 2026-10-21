import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonMobile } from "./ButtonMobile";
const meta = {
  title: "📱 Mobile components/Button / Mobile",
  component: ButtonMobile,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ButtonMobile>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    icon: true,
    icon2: "448:4926",
    icon3: "448:4926",
    type: "Primary",
    size: "Large",
    state: "Resting",
    icon4: "False",
  },
};
