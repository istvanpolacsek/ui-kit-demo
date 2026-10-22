import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSLightExample } from "./ModalSLightExample";
const meta = {
  title: "Overlay/Modal / S / Light example",
  component: ModalSLightExample,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSLightExample>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { defaultProp: 1 } };
