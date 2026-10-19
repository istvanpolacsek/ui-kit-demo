import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesArticle } from "./ExamplesArticle";
const meta = {
  title: "Examples/Examples/Article",
  component: ExamplesArticle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesArticle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
