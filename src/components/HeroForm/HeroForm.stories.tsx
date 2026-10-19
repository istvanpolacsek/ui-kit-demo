import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroForm } from "./HeroForm";
const meta = {
  title: "Sections/Hero Form",
  component: HeroForm,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroForm>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
