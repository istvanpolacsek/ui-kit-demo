import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColumnItemRegular } from "./ColumnItemRegular";
const meta = {
  title: "Module/Column item / Regular",
  component: ColumnItemRegular,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ColumnItemRegular>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    addedText: false,
    addedImage: true,
    hasButton: false,
    moveLeft: true,
    moveRight: true,
    state: "Default",
    mode: "Light",
  },
};
