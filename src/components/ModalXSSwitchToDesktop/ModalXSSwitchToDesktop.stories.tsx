import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalXSSwitchToDesktop } from "./ModalXSSwitchToDesktop";
const meta = {
  title: "Overlay/Modal / XS / Switch to desktop",
  component: ModalXSSwitchToDesktop,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalXSSwitchToDesktop>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { defaultProp: 1 } };
