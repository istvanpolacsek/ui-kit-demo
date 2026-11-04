import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextTitlePage } from "./TextTitlePage";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Title Page",
  component: TextTitlePage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextTitlePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Title Page" } };

export const CustomTextContent: Story = {
  args: { ...Default.args, text: "Welcome to the Adventure" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Welcome to the Adventure")[0],
    ).toHaveTextContent("Welcome to the Adventure");
    await expect(canvas.getAllByRole("heading")[0]).toHaveTextContent(
      "Welcome to the Adventure",
    );
  },
};
export const LongTitleText: Story = {
  args: {
    ...Default.args,
    text: "This Is a Very Long Title That Spans Across the Entire Page Header Section",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("heading")[0]).toBeVisible();
    await expect(
      canvas.getAllByText(
        "This Is a Very Long Title That Spans Across the Entire Page Header Section",
      )[0],
    ).toHaveTextContent(
      "This Is a Very Long Title That Spans Across the Entire Page Header Section",
    );
  },
};
