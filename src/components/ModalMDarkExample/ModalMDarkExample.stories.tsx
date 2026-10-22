import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalMDarkExample } from "./ModalMDarkExample";
const meta = {
  title: "Overlay/Modal / M / Dark example",
  component: ModalMDarkExample,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalMDarkExample>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { defaultProp: 1 } };
