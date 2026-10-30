import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoWallSection } from "./LogoWallSection";
const meta = {
  title: "Section/Logo wall section",
  component: LogoWallSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LogoWallSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showUI: true, logos: 4 } };
