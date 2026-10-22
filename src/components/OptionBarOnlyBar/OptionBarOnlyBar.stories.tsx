import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBarOnlyBar } from "./OptionBarOnlyBar";
const meta = {
  title: "Input/Option bar / Only bar",
  component: OptionBarOnlyBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBarOnlyBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    number: 4,
    active: 1,
    type: "Text",
    items: [
      { type: "Text", value: "1" },
      { type: "Text", value: "2" },
      { type: "Text", value: "3" },
      { type: "Text", value: "4" },
      { type: "Icon", value: "5" },
    ],
    defaultValue: "1",
  },
};
