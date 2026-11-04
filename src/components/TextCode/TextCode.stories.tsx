import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextCode } from "./TextCode";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Code",
  component: TextCode,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextCode>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Code" } };

export const LongTextContent: Story = {
  args: {
    ...Default.args,
    text: "const hello = () => { return 'Hello, World!'; };",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("code")[0]).toBeVisible();
    await expect(
      canvas.getAllByText(
        "const hello = () => { return 'Hello, World!'; };",
      )[0],
    ).toHaveTextContent("const hello = () => { return 'Hello, World!'; };");
  },
};
export const ShortLabel: Story = {
  args: { ...Default.args, text: "npm install" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("code")[0]).toBeVisible();
    await expect(canvas.getAllByText("npm install")[0]).toHaveTextContent(
      "npm install",
    );
  },
};
