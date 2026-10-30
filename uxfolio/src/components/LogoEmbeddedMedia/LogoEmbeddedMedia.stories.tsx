import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoEmbeddedMedia } from "./LogoEmbeddedMedia";
const meta = {
  title: "Visual asset/Logo / Embedded media",
  component: LogoEmbeddedMedia,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LogoEmbeddedMedia>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Adobe XD" } };
