import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioOption } from "./RadioOption";
const meta = {
  title: "  ↳ Controls/Radio Option",
  component: RadioOption,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RadioOption>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    device: "Desktop",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    defaultValue: "1",
  },
};
