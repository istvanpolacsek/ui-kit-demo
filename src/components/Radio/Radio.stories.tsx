import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";
const meta = {
  title: "Claude Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Radio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { size: "Large", checked: "No", disabled: "No", focused: "No" },
};
