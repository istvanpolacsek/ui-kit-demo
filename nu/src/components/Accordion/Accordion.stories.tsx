import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";
const meta = {
  title: "  ↳ Accordion/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed", device: "Desktop" } };
