import type { Meta, StoryObj } from "@storybook/react-vite";
import { KarmaScore } from "./KarmaScore";
const meta = {
  title: "Visual asset/Karma score",
  component: KarmaScore,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof KarmaScore>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Small" } };
