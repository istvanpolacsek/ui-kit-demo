import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalMLightExample } from "./ModalMLightExample";
const meta = {
  title: "Overlay/Modal / M / Light example",
  component: ModalMLightExample,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalMLightExample>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { defaultProp: 1 } };
