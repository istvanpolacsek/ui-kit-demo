import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalG2 } from "./ModalG2";
const meta = {
  title: "Overlay/Modal / G2",
  component: ModalG2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalG2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { property1: "XS", property2: "G2 feedback", property3: "Base" },
};
