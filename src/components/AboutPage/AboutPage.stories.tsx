import type { Meta, StoryObj } from "@storybook/react-vite";
import { AboutPage } from "./AboutPage";
const meta = {
  title: "Visual asset/About page",
  component: AboutPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AboutPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
