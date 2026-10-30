import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSDarkExample } from "./ModalSDarkExample";
const meta = {
  title: "Overlay/Modal / S / Dark example",
  component: ModalSDarkExample,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSDarkExample>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { defaultProp: 1 } };
