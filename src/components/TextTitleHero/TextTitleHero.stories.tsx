import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextTitleHero } from "./TextTitleHero";
const meta = {
  title: "Text/Text Title Hero",
  component: TextTitleHero,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextTitleHero>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Title Hero" } };
