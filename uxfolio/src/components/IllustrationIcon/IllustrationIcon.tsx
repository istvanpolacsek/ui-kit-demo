import React from "react";
import styled, { css } from "styled-components";

export interface IllustrationIconProps extends Omit<
  React.ComponentPropsWithoutRef<"svg">,
  "type" | "mode"
> {
  type?:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.svg<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
}>(
  ({ $type }) => css`
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Text":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 11px;
            padding-right: 5px;
            padding-bottom: 11px;
            padding-left: 5px;
            gap: 2px;
            justify-content: center;
            align-items: flex-start;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Big image":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 6px;
            padding-right: 3px;
            padding-bottom: 6px;
            padding-left: 3px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Divider line":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: center;
            align-items: flex-start;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Subheader":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 11px;
            padding-right: 3px;
            padding-bottom: 12px;
            padding-left: 3px;
            gap: 3px;
            justify-content: center;
            align-items: flex-start;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Process":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 9.5px;
            padding-right: 0px;
            padding-bottom: 9.5px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Testimonial":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 5.000575065612793px;
            padding-bottom: 8px;
            padding-left: 5px;
            gap: 1.2935428619384766px;
            justify-content: center;
            align-items: flex-start;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Logo wall":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 10.2998046875px;
            padding-right: 1px;
            padding-bottom: 8.7001953125px;
            padding-left: 0.5px;
            gap: 0px;
            justify-content: center;
            align-items: flex-start;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Articles":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            gap: 3px;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Wireframes":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            gap: 2px;
            justify-content: center;
            align-items: flex-start;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "UI design":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            gap: 2px;
            justify-content: center;
            align-items: flex-start;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "A/B test":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 6px;
            padding-right: 3px;
            padding-bottom: 6px;
            padding-left: 3px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Resumé":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            gap: 3px;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Blank page":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 6px;
            padding-bottom: 4px;
            padding-left: 6px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 32px;
    height: 32px;
    box-sizing: border-box;
  `,
);

const StyledHighlight = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    width: 16px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Text","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Image & text","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Columns","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Divider line","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Prototype","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Stats","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Subheader","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Call to action","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Contact form","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Personas","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Card sorting","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Usability testing","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Statement","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Workshops","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Case studies","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Text","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Image & text","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Columns","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Divider line","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Prototype","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Subheader","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Call to action","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Contact form","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Personas","Light"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Card sorting","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Statement","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Workshops","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Case studies","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHighlight2 = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    width: 22px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Text","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Image & text","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Columns","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Divider line","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Prototype","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Stats","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Subheader","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Call to action","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Contact form","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Personas","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Card sorting","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Usability testing","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Statement","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Workshops","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Case studies","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Text","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Image & text","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Columns","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Divider line","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Prototype","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Subheader","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Call to action","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Contact form","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Personas","Light"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Card sorting","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Statement","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Workshops","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Case studies","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHighlight3 = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    width: 22px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Text","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Image & text","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Columns","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Divider line","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Stats","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Contact form","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Case studies","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Text","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Image & text","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Columns","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Divider line","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Contact form","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Case studies","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledImage = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    overflow: hidden;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["UI design","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Big image","Dark"]':
          return css`
            border-radius: 3px;
          `;
        case '["Image & text","Dark"]':
          return css`
            border-radius: 0px;
          `;
        case '["Columns","Dark"]':
          return css`
            border-radius: 0px;
          `;
        case '["Gallery","Dark"]':
          return css`
            border-radius: 0px;
          `;
        case '["Media","Dark"]':
          return css`
            border-radius: 0px;
          `;
        case '["UI design","Dark"]':
          return css`
            border-radius: 0px;
          `;
        case '["Usability testing","Dark"]':
          return css`
            border-radius: 3px;
          `;
        case '["A/B test","Dark"]':
          return css`
            border-radius: 0px;
          `;
        case '["New image","Dark"]':
          return css`
            border-radius: 0px;
          `;
        case '["Big image","Light"]':
          return css`
            border-radius: 0px;
          `;
        case '["Image & text","Light"]':
          return css`
            border-radius: 0px;
          `;
        case '["Columns","Light"]':
          return css`
            border-radius: 0px;
          `;
        case '["Gallery","Light"]':
          return css`
            border-radius: 0px;
          `;
        case '["Media","Light"]':
          return css`
            border-radius: 0px;
          `;
        case '["UI design","Light"]':
          return css`
            border-radius: 0px;
          `;
        case '["Usability testing","Light"]':
          return css`
            border-radius: 3px;
          `;
        case '["A/B test","Light"]':
          return css`
            border-radius: 0px;
          `;
        case '["New image","Light"]':
          return css`
            border-radius: 0px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHighlight4 = styled.div(
  () => css`
    width: 26px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledVector1 = styled.div(
  () => css`
    width: 26px;
    height: 10.833332061767578px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 0px;
  `,
);

const StyledHighlight22 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 5px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle821 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 5px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.4000000059604645)"};
          `;
        case "Light":
          return css`
            background-color: ${"rgba(0, 0, 0, 0.20000000298023224)"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle8212 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 9px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.4000000059604645)"};
          `;
        case "Light":
          return css`
            background-color: ${"rgba(0, 0, 0, 0.20000000298023224)"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHighlight5 = styled.div(
  () => css`
    width: 26px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledExclude = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 26px;
    height: 5.5px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.4000000059604645)"};
          `;
        case "Light":
          return css`
            background-color: ${"rgba(0, 0, 0, 0.20000000298023224)"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledA = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            color: ${"#ffffff"};
          `;
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-sf-mono, 'SF Mono'), monospace;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.01em;
  `,
);

const StyledB = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            color: ${"#ffffff"};
          `;
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-sf-mono, 'SF Mono'), monospace;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.01em;
  `,
);

const StyledImage2 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledHighlight6 = styled.div(
  () => css`
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledVector12 = styled.div(
  () => css`
    width: 12px;
    height: 7.5px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 0px;
  `,
);

const StyledHighlight42 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 12px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledImage3 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledHighlight7 = styled.div(
  () => css`
    width: 11px;
    height: 11px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledVector13 = styled.div(
  () => css`
    width: 11px;
    height: 6.875px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 0px;
  `,
);

const StyledImage4 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledHighlight8 = styled.div(
  () => css`
    width: 11px;
    height: 11px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledVector14 = styled.div(
  () => css`
    width: 11px;
    height: 6.875px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 0px;
  `,
);

const StyledVector142 = styled.div(
  () => css`
    width: 10px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 2px;
  `,
);

const StyledEllipse163 = styled.div(
  () => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
  `,
);

const StyledPolygon4 = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    width: 6.000000476837158px;
    height: 5.999999523162842px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Video","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Video","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle783 = styled.div(
  () => css`
    width: 26px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 5px;
  `,
);

const StyledUnion = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Media","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["ADP list","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["About me","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Services","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Survey","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Customer journey","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["User journey","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Wireframes","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Usability testing","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Look and feel","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Design sprint","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Flow","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["PDF resumé","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Problem & solutions","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Gift","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Media","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Stats","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["ADP list","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["About me","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Services","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Survey","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Customer journey","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["User journey","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Wireframes","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Usability testing","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Look and feel","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Design sprint","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Flow","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["PDF resumé","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Problem & solutions","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Gift","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styled4 = styled.div(
  () => css`
    color: transparent;
    font-family: var(--font-sf-mono, "SF Mono"), monospace;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.01em;
  `,
);

const Styled5 = styled.div(
  () => css`
    color: transparent;
    font-family: var(--font-sf-mono, "SF Mono"), monospace;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.01em;
  `,
);

const StyledBG = styled.div(
  () => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

const StyledBG2 = styled.div(
  () => css`
    width: 14px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledUnion2 = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    width: 6.000131607055664px;
    height: 6.00034761428833px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["ADP list","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Usability testing","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["ADP list","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Usability testing","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVector132 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledEllipse157 = styled.div(
  () => css`
    width: 13px;
    height: 13px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

const Styled1 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            color: ${"#ffffff"};
          `;
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-sf-mono, 'SF Mono'), monospace;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.01em;
  `,
);

const StyledEllipse1572 = styled.div(
  () => css`
    width: 13px;
    height: 13px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

const Styled2 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            color: ${"#ffffff"};
          `;
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-sf-mono, 'SF Mono'), monospace;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.01em;
  `,
);

const StyledformatQuote = styled.div(
  () => css`
    width: 10.352941513061523px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledformatQuote2 = styled.div(
  () => css`
    width: 10.352940559387207px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledEllipse164 = styled.div(
  () => css`
    width: 9px;
    height: 9px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

const StyledRectangle784 = styled.div(
  () => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledPolygon5 = styled.div(
  () => css`
    width: 13px;
    height: 13px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledFrame48096879 = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    background-color: transparent;
    ${(() => {
      switch ($type) {
        case "Call to action":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 2.5px;
            padding-right: 3px;
            padding-bottom: 2.5px;
            padding-left: 3px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 14px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Design system":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 3.5px;
            padding-right: 4.5px;
            padding-bottom: 3.5px;
            padding-left: 4.5px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 18px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Call to action","Dark"]':
          return css`
            border-radius: 999px;
          `;
        case '["Design system","Dark"]':
          return css`
            border-radius: 999px;
          `;
        case '["Call to action","Light"]':
          return css`
            border-radius: 99px;
          `;
        case '["Design system","Light"]':
          return css`
            border-radius: 999px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHighlight9 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse1573 = styled.div(
  () => css`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

const StyledEllipse1574 = styled.div(
  () => css`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

const StyledEllipse165 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 6px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.4000000059604645)"};
          `;
        case "Light":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.6000000238418579)"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse1652 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 12px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.4000000059604645)"};
          `;
        case "Light":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.6000000238418579)"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledBG3 = styled.div(
  () => css`
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

const StyledPerson = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 14.862707138061523px;
    height: 16.25px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledMaskGroup = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 2.625px;
    padding-right: 1.75px;
    padding-bottom: 0px;
    padding-left: 1.75px;
    gap: 0.875px;
    justify-content: flex-end;
    align-items: center;
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledEllipse1653 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 5.25px;
    height: 5.25px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse1654 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 10.5px;
    height: 8.75px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledwavingHand = styled.div(
  () => css`
    width: 21.48072624206543px;
    height: 19.984127044677734px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledwavingHand2 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVector17 = styled.div(
  () => css`
    width: 32px;
    height: 15px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
  `,
);

const StyledSubtract = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    width: 14px;
    height: 8.072471618652344px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Education","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Awards","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Interviews","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Survey","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["User journey","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Card sorting","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Jobs to be done","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Workshops","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Contact","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["PDF resumé","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["External page","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Mailto","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Competetive research","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Project overview","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Learnings","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Problem & solutions","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Field studies","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Personal success","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Education","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Awards","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Interviews","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Survey","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["User journey","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Card sorting","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Jobs to be done","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Workshops","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Contact","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["PDF resumé","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["External page","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Mailto","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Competetive research","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Project overview","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Learnings","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Problem & solutions","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Field studies","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Personal success","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVector18 = styled.div(
  () => css`
    width: 10px;
    height: 9px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 1px;
  `,
);

const StyledEllipse167 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 6px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse1672 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 6px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse1673 = styled.div(
  () => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

const StyledEllipse1674 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 6px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHighlight10 = styled.div(
  () => css`
    width: 16px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledVector21 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 7px;
    height: 7px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.4000000059604645)"};
          `;
        case "Light":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHighlight11 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 6px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHighlight23 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 9px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledMaskGroup2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 2.625px;
    padding-right: 1.75px;
    padding-bottom: 0px;
    padding-left: 1.75px;
    gap: 0.875px;
    justify-content: flex-end;
    align-items: center;
    width: 14px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledEllipse1655 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 5.25px;
    height: 5.25px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse1656 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 10.5px;
    height: 8.75px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle786 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 3px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledStar1 = styled.div(
  () => css`
    width: 22px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 2px;
  `,
);

const StyledStar12 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledsportsEsports = styled.div(
  () => css`
    width: 26px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledsportsEsports2 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 15.623434066772461px;
    height: 6.4285712242126465px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIntersect = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    width: 14.16769027709961px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Social media","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["User journey","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Social media","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["User journey","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIntersect2 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 11.442137718200684px;
    height: 16.087108612060547px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHighlight52 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 15px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUnion3 = styled.div(
  () => css`
    width: 21px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const Styled = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            color: ${"#ffffff"};
          `;
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-sf-pro, 'SF Pro'), sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.01em;
  `,
);

const StyledBackground = styled.div(
  () => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledVector = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 8px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styled12 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            color: ${"#ffffff"};
          `;
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-sf-mono, 'SF Mono'), monospace;
    font-size: 8px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.01em;
  `,
);

const Styled22 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            color: ${"#ffffff"};
          `;
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-sf-mono, 'SF Mono'), monospace;
    font-size: 8px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.01em;
  `,
);

const StyledRectangle790 = styled.div(
  () => css`
    width: 20px;
    height: 30px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle791 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 20px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.20000000298023224)"};
          `;
        case "Light":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledBoundingBox = styled.div(
  () => css`
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #d9d9d9;
    border-radius: 0px;
  `,
);

const StyledVector24 = styled.div(
  () => css`
    width: 11px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledEllipse170 = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Customer journey","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Design system","Dark"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Customer journey","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Design system","Light"]':
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle822 = styled.div(
  () => css`
    width: 9px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle823 = styled.div(
  () => css`
    width: 4px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 0px;
  `,
);

const StyledRectangle8232 = styled.div(
  () => css`
    width: 4px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 0px;
  `,
);

const StyledRectangle8233 = styled.div(
  () => css`
    width: 4px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 0px;
  `,
);

const StyledRectangle8234 = styled.div(
  () => css`
    width: 4px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 0px;
  `,
);

const StyledUnion4 = styled.div(
  () => css`
    width: 32px;
    height: 6.0001220703125px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle824 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 6.676440238952637px;
    height: 6.0001220703125px;
    box-sizing: border-box;
    flex-shrink: 0;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVector33 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 2.715179681777954px;
    height: 4.072852611541748px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle793 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 19px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle7932 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 22px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse174 = styled.div(
  () => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
  `,
);

const StyledExclude2 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle797 = styled.div(
  () => css`
    width: 27px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 2px;
  `,
);

const StyledRectangle798 = styled.div(
  () => css`
    width: 7px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledrocketLaunch = styled.div(
  () => css`
    width: 26.86531639099121px;
    height: 26.865474700927734px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledrocketLaunch2 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 7px;
    height: 7px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledrocketLaunch3 = styled.div(
  () => css`
    width: 9.445036888122559px;
    height: 9.433826446533203px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledVector26 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 23px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"transparent"};
          `;
        case "Light":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle802 = styled.div(
  () => css`
    width: 2px;
    height: 26px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledVector27 = styled.div(
  () => css`
    width: 8px;
    height: 5px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledRectangle804 = styled.div(
  () => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle803 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 3px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle8032 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 3px;
    height: 14px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle8033 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 3px;
    height: 7px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVector23 = styled.div(
  () => css`
    width: 26px;
    height: 19px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledEllipse1702 = styled.div(
  () => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

const StyledEllipse1703 = styled.div(
  () => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

const StyledEllipse1704 = styled.div(
  () => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
  `,
);

const StyledVector29 = styled.div(
  () => css`
    width: 10px;
    height: 13px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledRectangle805 = styled.div(
  () => css`
    width: 8px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle806 = styled.div(
  () => css`
    width: 18px;
    height: 26px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
  `,
);

const StyledVector30 = styled.div(
  () => css`
    width: 18px;
    height: 7px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
  `,
);

const StyledwebTraffic = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 21.33333396911621px;
    height: 19.399999618530273px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"transparent"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledwebTraffic2 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 14.666666030883789px;
    height: 14.666666030883789px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle810 = styled.div(
  () => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 3px;
  `,
);

const StyledRectangle811 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 14px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle8112 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 8px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSubtract2 = styled.div(
  () => css`
    width: 16px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledPDF = styled.div<{
  $mode: "Dark" | "Light";
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
}>(
  ({ $mode, $type }) => css`
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            color: ${"#ffffff"};
          `;
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "PDF":
          return css`
            font-family: var(--font-sf-mono, "SF Mono"), monospace;
            font-size: 9px;
            font-weight: 400;
            line-height: 20px;
          `;
        case "PDF resumé":
          return css`
            font-family: var(--font-sf-mono, "SF Mono"), monospace;
            font-size: 9px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.01em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledadsClick = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 13.125px;
    height: 13.125px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIntersect3 = styled.div(
  () => css`
    width: 26px;
    height: 11.5px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.30000001192092896);
    border-radius: 0px;
  `,
);

const StyledattachEmail = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 10.666666030883789px;
    height: 14.666666984558105px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledmapSearch = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 13.333333969116211px;
    height: 13.333333969116211px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSubtract22 = styled.div<{
  $type:
    | "A/B test"
    | "ADP list"
    | "About me"
    | "Articles"
    | "Awards"
    | "Big image"
    | "Blank page"
    | "Business goals"
    | "Call to action"
    | "Card sorting"
    | "Case studies"
    | "Columns"
    | "Competetive research"
    | "Contact"
    | "Contact form"
    | "Customer journey"
    | "Design sprint"
    | "Design system"
    | "Divider line"
    | "Education"
    | "External page"
    | "Field studies"
    | "Flow"
    | "Gallery"
    | "Heuristic evaluation"
    | "Hobbies"
    | "Image & text"
    | "Interviews"
    | "Jobs to be done"
    | "KPI"
    | "Learnings"
    | "Logo wall"
    | "Look and feel"
    | "Mailto"
    | "Media"
    | "Next steps"
    | "PDF"
    | "PDF resumé"
    | "Pages"
    | "Personas"
    | "Problem & solutions"
    | "Process"
    | "Project details"
    | "Project overview"
    | "Prototype"
    | "Resumé"
    | "Services"
    | "Short intro"
    | "Showcase"
    | "Sketches"
    | "Social media"
    | "Statement"
    | "Stats"
    | "Subheader"
    | "Survey"
    | "Testimonial"
    | "Text"
    | "UI design"
    | "Usability testing"
    | "User journey"
    | "Video"
    | "Wireframes"
    | "Workshops"
    | "New image"
    | "Gift"
    | "Personal success";
}>(
  ({ $type }) => css`
    width: 8px;
    height: 23.51963233947754px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Competetive research":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.30000001192092896)"};
          `;
        case "Field studies":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.4000000059604645)"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styledchecklist = styled.div(
  () => css`
    width: 12.00000286102295px;
    height: 13px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const Styledchecklist2 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 10px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styledchecklist3 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 10px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVector212 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 7px;
    height: 7px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.4000000059604645)"};
          `;
        case "Light":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledmountainFlag = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 9.333333969116211px;
    height: 9.333333969116211px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledmountainFlag2 = styled.div(
  () => css`
    width: 26.666667938232422px;
    height: 11.166666030883789px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledmountainFlag3 = styled.div(
  () => css`
    width: 14px;
    height: 7.466667175292969px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle814 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 2px;
    height: 15px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUnion5 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 20px;
    height: 26px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"transparent"};
          `;
        case "Light":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle816 = styled.div(
  () => css`
    width: 2px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 0px;
  `,
);

const StyledHighlight12 = styled.div(
  () => css`
    width: 11px;
    height: 7px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle818 = styled.div(
  () => css`
    width: 4px;
    height: 5px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
  `,
);

const StyledHighlight13 = styled.div(
  () => css`
    width: 11px;
    height: 7px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle8182 = styled.div(
  () => css`
    width: 4px;
    height: 5px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
  `,
);

const StyledHighlight14 = styled.div(
  () => css`
    width: 11px;
    height: 7px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle8183 = styled.div(
  () => css`
    width: 4px;
    height: 5px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
  `,
);

const StyledHighlight15 = styled.div(
  () => css`
    width: 11px;
    height: 7px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle8184 = styled.div(
  () => css`
    width: 4px;
    height: 5px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
  `,
);

const StyledVector34 = styled.div(
  () => css`
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledRectangle825 = styled.div(
  () => css`
    width: 22px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle8252 = styled.div(
  () => css`
    width: 26px;
    height: 7px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const Styled3 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 15px;
    height: 17px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** An illustration/icon component with multiple visual variants representing different UX/design topics (e.g. A/B test, articles, awards, contact, etc.) and two color modes (Dark/Light). Used as decorative or contextual imagery within a portfolio or design tool interface. */
export const IllustrationIcon = React.forwardRef<
  SVGSVGElement,
  IllustrationIconProps
>(function IllustrationIcon({ type = "Text", mode = "Dark", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Illustration icon"
      aria-describedby="illustration-description"
      {...rest}
      ref={ref}
      $type={type}
    >
      {((type === "Text" && mode === "Dark") ||
        (type === "Image & text" && mode === "Dark") ||
        (type === "Columns" && mode === "Dark") ||
        (type === "Divider line" && mode === "Dark") ||
        (type === "Prototype" && mode === "Dark") ||
        (type === "Stats" && mode === "Dark") ||
        (type === "Subheader" && mode === "Dark") ||
        (type === "Call to action" && mode === "Dark") ||
        (type === "Contact form" && mode === "Dark") ||
        (type === "Personas" && mode === "Dark") ||
        (type === "Card sorting" && mode === "Dark") ||
        (type === "Usability testing" && mode === "Dark") ||
        (type === "Statement" && mode === "Dark") ||
        (type === "Workshops" && mode === "Dark") ||
        (type === "Case studies" && mode === "Dark") ||
        (type === "Text" && mode === "Light") ||
        (type === "Image & text" && mode === "Light") ||
        (type === "Columns" && mode === "Light") ||
        (type === "Divider line" && mode === "Light") ||
        (type === "Prototype" && mode === "Light") ||
        (type === "Subheader" && mode === "Light") ||
        (type === "Call to action" && mode === "Light") ||
        (type === "Contact form" && mode === "Light") ||
        (type === "Personas" && mode === "Light") ||
        (type === "Card sorting" && mode === "Light") ||
        (type === "Statement" && mode === "Light") ||
        (type === "Workshops" && mode === "Light") ||
        (type === "Case studies" && mode === "Light")) && (
        <StyledHighlight $type={type} $mode={mode} />
      )}
      {((type === "Text" && mode === "Dark") ||
        (type === "Image & text" && mode === "Dark") ||
        (type === "Columns" && mode === "Dark") ||
        (type === "Divider line" && mode === "Dark") ||
        (type === "Prototype" && mode === "Dark") ||
        (type === "Stats" && mode === "Dark") ||
        (type === "Subheader" && mode === "Dark") ||
        (type === "Call to action" && mode === "Dark") ||
        (type === "Contact form" && mode === "Dark") ||
        (type === "Personas" && mode === "Dark") ||
        (type === "Card sorting" && mode === "Dark") ||
        (type === "Usability testing" && mode === "Dark") ||
        (type === "Statement" && mode === "Dark") ||
        (type === "Workshops" && mode === "Dark") ||
        (type === "Case studies" && mode === "Dark") ||
        (type === "Text" && mode === "Light") ||
        (type === "Image & text" && mode === "Light") ||
        (type === "Columns" && mode === "Light") ||
        (type === "Divider line" && mode === "Light") ||
        (type === "Prototype" && mode === "Light") ||
        (type === "Subheader" && mode === "Light") ||
        (type === "Call to action" && mode === "Light") ||
        (type === "Contact form" && mode === "Light") ||
        (type === "Personas" && mode === "Light") ||
        (type === "Card sorting" && mode === "Light") ||
        (type === "Statement" && mode === "Light") ||
        (type === "Workshops" && mode === "Light") ||
        (type === "Case studies" && mode === "Light")) && (
        <StyledHighlight2 $type={type} $mode={mode} />
      )}
      {((type === "Text" && mode === "Dark") ||
        (type === "Image & text" && mode === "Dark") ||
        (type === "Columns" && mode === "Dark") ||
        (type === "Divider line" && mode === "Dark") ||
        (type === "Stats" && mode === "Dark") ||
        (type === "Contact form" && mode === "Dark") ||
        (type === "Case studies" && mode === "Dark") ||
        (type === "Text" && mode === "Light") ||
        (type === "Image & text" && mode === "Light") ||
        (type === "Columns" && mode === "Light") ||
        (type === "Divider line" && mode === "Light") ||
        (type === "Contact form" && mode === "Light") ||
        (type === "Case studies" && mode === "Light")) && (
        <StyledHighlight3 $type={type} $mode={mode} />
      )}
      {[
        "Big image",
        "Image & text",
        "Columns",
        "Gallery",
        "Media",
        "UI design",
        "Usability testing",
        "A/B test",
        "New image",
      ].includes(type) && (
        <StyledImage $type={type} $mode={mode}>
          {((type === "Big image" && mode === "Dark") ||
            (type === "Image & text" && mode === "Dark") ||
            (type === "Columns" && mode === "Dark") ||
            (type === "Gallery" && mode === "Dark") ||
            (type === "Media" && mode === "Dark") ||
            (type === "UI design" && mode === "Dark") ||
            (type === "Usability testing" && mode === "Dark") ||
            (type === "Big image" && mode === "Light") ||
            (type === "Image & text" && mode === "Light") ||
            (type === "Gallery" && mode === "Light") ||
            (type === "Media" && mode === "Light") ||
            (type === "UI design" && mode === "Light") ||
            (type === "Usability testing" && mode === "Light")) && (
            <StyledHighlight4 />
          )}
          {[
            "Big image",
            "Image & text",
            "Columns",
            "Gallery",
            "Media",
            "UI design",
            "New image",
          ].includes(type) && <StyledVector1 />}
          {type === "Usability testing" && <StyledHighlight22 $mode={mode} />}
          {type === "Usability testing" && <StyledRectangle821 $mode={mode} />}
          {type === "Usability testing" && <StyledRectangle8212 $mode={mode} />}
          {((type === "A/B test" && mode === "Dark") ||
            (type === "New image" && mode === "Dark") ||
            (type === "Columns" && mode === "Light") ||
            (type === "A/B test" && mode === "Light") ||
            (type === "New image" && mode === "Light")) && <StyledHighlight5 />}
          {type === "A/B test" && <StyledExclude $mode={mode} />}
          {type === "A/B test" && <StyledA $mode={mode}>{"A"}</StyledA>}
          {type === "A/B test" && <StyledB $mode={mode}>{"B"}</StyledB>}
        </StyledImage>
      )}
      {["Columns", "Gallery"].includes(type) && (
        <StyledImage2>
          {["Columns", "Gallery"].includes(type) && <StyledHighlight6 />}
          {["Columns", "Gallery"].includes(type) && <StyledVector12 />}
        </StyledImage2>
      )}
      {((type === "Columns" && mode === "Dark") ||
        (type === "Stats" && mode === "Dark") ||
        (type === "Contact form" && mode === "Dark") ||
        (type === "Case studies" && mode === "Dark") ||
        (type === "Columns" && mode === "Light") ||
        (type === "Contact form" && mode === "Light") ||
        (type === "Case studies" && mode === "Light")) && (
        <StyledHighlight42 $mode={mode} />
      )}
      {type === "Gallery" && (
        <StyledImage3>
          {type === "Gallery" && <StyledHighlight7 />}
          {type === "Gallery" && <StyledVector13 />}
        </StyledImage3>
      )}
      {type === "Gallery" && (
        <StyledImage4>
          {type === "Gallery" && <StyledHighlight8 />}
          {type === "Gallery" && <StyledVector14 />}
        </StyledImage4>
      )}
      {type === "Prototype" && <StyledVector142 />}
      {type === "Prototype" && <StyledEllipse163 />}
      {["Prototype", "Video"].includes(type) && (
        <StyledPolygon4 $type={type} $mode={mode} />
      )}
      {type === "Video" && <StyledRectangle783 />}
      {((type === "Media" && mode === "Dark") ||
        (type === "ADP list" && mode === "Dark") ||
        (type === "About me" && mode === "Dark") ||
        (type === "Services" && mode === "Dark") ||
        (type === "Survey" && mode === "Dark") ||
        (type === "Customer journey" && mode === "Dark") ||
        (type === "User journey" && mode === "Dark") ||
        (type === "Wireframes" && mode === "Dark") ||
        (type === "Usability testing" && mode === "Dark") ||
        (type === "Look and feel" && mode === "Dark") ||
        (type === "Design sprint" && mode === "Dark") ||
        (type === "Flow" && mode === "Dark") ||
        (type === "PDF resumé" && mode === "Dark") ||
        (type === "Problem & solutions" && mode === "Dark") ||
        (type === "Gift" && mode === "Dark") ||
        (type === "Media" && mode === "Light") ||
        (type === "Stats" && mode === "Light") ||
        (type === "ADP list" && mode === "Light") ||
        (type === "About me" && mode === "Light") ||
        (type === "Services" && mode === "Light") ||
        (type === "Survey" && mode === "Light") ||
        (type === "Customer journey" && mode === "Light") ||
        (type === "User journey" && mode === "Light") ||
        (type === "Wireframes" && mode === "Light") ||
        (type === "Usability testing" && mode === "Light") ||
        (type === "Look and feel" && mode === "Light") ||
        (type === "Design sprint" && mode === "Light") ||
        (type === "Flow" && mode === "Light") ||
        (type === "PDF resumé" && mode === "Light") ||
        (type === "Problem & solutions" && mode === "Light") ||
        (type === "Gift" && mode === "Light")) && (
        <StyledUnion $type={type} $mode={mode} />
      )}
      {type === "Stats" && <Styled4>{"4"}</Styled4>}
      {type === "Stats" && <Styled5>{"5"}</Styled5>}
      {type === "ADP list" && <StyledBG />}
      {type === "ADP list" && <StyledBG2 />}
      {["ADP list", "Usability testing"].includes(type) && (
        <StyledUnion2 $type={type} $mode={mode} />
      )}
      {type === "Process" && <StyledVector132 />}
      {type === "Process" && (
        <div>
          {type === "Process" && <StyledEllipse157 />}
          {type === "Process" && <Styled1 $mode={mode}>{"1"}</Styled1>}
        </div>
      )}
      {type === "Process" && (
        <div>
          {type === "Process" && <StyledEllipse1572 />}
          {type === "Process" && <Styled2 $mode={mode}>{"2"}</Styled2>}
        </div>
      )}
      {type === "Testimonial" && <StyledformatQuote />}
      {type === "Testimonial" && <StyledformatQuote2 />}
      {type === "Logo wall" && <StyledEllipse164 />}
      {type === "Logo wall" && <StyledRectangle784 />}
      {type === "Logo wall" && <StyledPolygon5 />}
      {["Call to action", "Design system"].includes(type) && (
        <StyledFrame48096879 $type={type} $mode={mode}>
          {["Call to action", "Design system"].includes(type) && (
            <StyledHighlight9 $mode={mode} />
          )}
        </StyledFrame48096879>
      )}
      {["About me", "Social media", "Personas"].includes(type) && (
        <div>
          {type === "About me" && <StyledEllipse1573 />}
          {type === "About me" && (
            <div>
              {type === "About me" && <StyledEllipse1574 />}
              {type === "About me" && <StyledEllipse165 $mode={mode} />}
              {type === "About me" && <StyledEllipse1652 $mode={mode} />}
            </div>
          )}
          {type === "Social media" && <StyledBG3 />}
          {type === "Social media" && <StyledPerson $mode={mode} />}
          {type === "Personas" && (
            <StyledMaskGroup>
              {type === "Personas" && <StyledEllipse1653 $mode={mode} />}
              {type === "Personas" && <StyledEllipse1654 $mode={mode} />}
            </StyledMaskGroup>
          )}
        </div>
      )}
      {type === "Short intro" && <StyledwavingHand />}
      {type === "Short intro" && <StyledwavingHand2 $mode={mode} />}
      {type === "Education" && <StyledVector17 />}
      {[
        "Education",
        "Awards",
        "Interviews",
        "Survey",
        "User journey",
        "Card sorting",
        "Jobs to be done",
        "Workshops",
        "Contact",
        "PDF resumé",
        "External page",
        "Mailto",
        "Competetive research",
        "Project overview",
        "Learnings",
        "Problem & solutions",
        "Field studies",
        "Personal success",
      ].includes(type) && <StyledSubtract $type={type} $mode={mode} />}
      {type === "Education" && <StyledVector18 />}
      {type === "Services" && <StyledEllipse167 $mode={mode} />}
      {type === "Services" && <StyledEllipse1672 $mode={mode} />}
      {type === "Services" && <StyledEllipse1673 />}
      {type === "Services" && <StyledEllipse1674 $mode={mode} />}
      {[
        "Articles",
        "Workshops",
        "Resumé",
        "Blank page",
        "Pages",
        "PDF",
      ].includes(type) && (
        <div>
          {[
            "Articles",
            "Workshops",
            "Resumé",
            "Blank page",
            "Pages",
            "PDF",
          ].includes(type) && <StyledHighlight10 />}
          {[
            "Articles",
            "Workshops",
            "Resumé",
            "Blank page",
            "Pages",
            "PDF",
          ].includes(type) && <StyledVector21 $mode={mode} />}
          {["Articles", "Pages"].includes(type) && (
            <StyledHighlight11 $mode={mode} />
          )}
          {["Articles", "Pages"].includes(type) && (
            <StyledHighlight23 $mode={mode} />
          )}
          {type === "Resumé" && (
            <div>
              {type === "Resumé" && (
                <StyledMaskGroup2>
                  {type === "Resumé" && <StyledEllipse1655 $mode={mode} />}
                  {type === "Resumé" && <StyledEllipse1656 $mode={mode} />}
                </StyledMaskGroup2>
              )}
            </div>
          )}
        </div>
      )}
      {["Articles", "Resumé"].includes(type) && (
        <StyledRectangle786 $mode={mode} />
      )}
      {type === "Awards" && <StyledStar1 />}
      {type === "Awards" && <StyledStar12 $mode={mode} />}
      {type === "Hobbies" && <StyledsportsEsports />}
      {type === "Hobbies" && <StyledsportsEsports2 $mode={mode} />}
      {["Social media", "User journey"].includes(type) && (
        <StyledIntersect $type={type} $mode={mode} />
      )}
      {type === "Social media" && <StyledIntersect2 $mode={mode} />}
      {type === "Contact form" && <StyledHighlight52 $mode={mode} />}
      {type === "Interviews" && (
        <div>
          {type === "Interviews" && <StyledUnion3 />}
          {type === "Interviews" && <Styled $mode={mode}>{"?"}</Styled>}
        </div>
      )}
      {["Survey", "PDF resumé", "Gift"].includes(type) && <StyledBackground />}
      {type === "Survey" && <StyledVector $mode={mode} />}
      {type === "Survey" && <Styled12 $mode={mode}>{"1"}</Styled12>}
      {type === "Survey" && <Styled22 $mode={mode}>{"2"}</Styled22>}
      {["Personas", "Card sorting"].includes(type) && <StyledRectangle790 />}
      {type === "Personas" && <StyledRectangle791 $mode={mode} />}
      {type === "Customer journey" && (
        <div>{type === "Customer journey" && <StyledBoundingBox />}</div>
      )}
      {type === "Customer journey" && <StyledVector24 />}
      {["Customer journey", "Design system"].includes(type) && (
        <StyledEllipse170 $type={type} $mode={mode} />
      )}
      {type === "Sketches" && (
        <div>
          {type === "Sketches" && <StyledRectangle822 />}
          {type === "Sketches" && <StyledRectangle823 />}
          {type === "Sketches" && <StyledRectangle8232 />}
          {type === "Sketches" && <StyledRectangle8233 />}
          {type === "Sketches" && <StyledRectangle8234 />}
        </div>
      )}
      {type === "Sketches" && (
        <div>
          {type === "Sketches" && <StyledUnion4 />}
          {type === "Sketches" && <StyledRectangle824 $mode={mode} />}
          {type === "Sketches" && <StyledVector33 $mode={mode} />}
        </div>
      )}
      {["Wireframes", "UI design"].includes(type) && (
        <StyledRectangle793 $mode={mode} />
      )}
      {["Wireframes", "UI design"].includes(type) && (
        <StyledRectangle7932 $mode={mode} />
      )}
      {type === "Look and feel" && <StyledEllipse174 />}
      {type === "Design sprint" && <StyledExclude2 $mode={mode} />}
      {type === "Jobs to be done" && <StyledRectangle797 />}
      {type === "Jobs to be done" && <StyledRectangle798 />}
      {type === "Showcase" && <StyledrocketLaunch />}
      {type === "Showcase" && <StyledrocketLaunch2 $mode={mode} />}
      {type === "Showcase" && <StyledrocketLaunch3 />}
      {type === "Business goals" && <StyledVector26 $mode={mode} />}
      {type === "Business goals" && <StyledRectangle802 />}
      {type === "Business goals" && <StyledVector27 />}
      {type === "KPI" && <StyledRectangle804 />}
      {type === "KPI" && <StyledRectangle803 $mode={mode} />}
      {type === "KPI" && <StyledRectangle8032 $mode={mode} />}
      {type === "KPI" && <StyledRectangle8033 $mode={mode} />}
      {type === "Design system" && <StyledVector23 />}
      {type === "Design system" && <StyledEllipse1702 />}
      {type === "Design system" && <StyledEllipse1703 />}
      {type === "Design system" && <StyledEllipse1704 />}
      {type === "Flow" && <StyledVector29 />}
      {type === "Flow" && mode === "Dark" && <StyledRectangle805 />}
      {type === "Statement" && <StyledRectangle806 />}
      {type === "Statement" && <StyledVector30 />}
      {type === "Heuristic evaluation" && <StyledwebTraffic $mode={mode} />}
      {type === "Heuristic evaluation" && <StyledwebTraffic2 $mode={mode} />}
      {type === "Contact" && <StyledRectangle810 />}
      {type === "Contact" && <StyledRectangle811 $mode={mode} />}
      {type === "Contact" && <StyledRectangle8112 $mode={mode} />}
      {type === "Pages" && <StyledSubtract2 />}
      {["PDF", "PDF resumé"].includes(type) && (
        <StyledPDF $mode={mode} $type={type}>
          {"PDF"}
        </StyledPDF>
      )}
      {type === "External page" && <StyledadsClick $mode={mode} />}
      {type === "Mailto" && <StyledIntersect3 />}
      {type === "Mailto" && <StyledattachEmail $mode={mode} />}
      {["Competetive research", "Project overview", "Field studies"].includes(
        type,
      ) && <StyledmapSearch $mode={mode} />}
      {["Competetive research", "Field studies"].includes(type) && (
        <StyledSubtract22 $type={type} />
      )}
      {type === "Project details" && <Styledchecklist />}
      {type === "Project details" && <Styledchecklist2 $mode={mode} />}
      {type === "Project details" && <Styledchecklist3 $mode={mode} />}
      {type === "Project overview" && <StyledVector212 $mode={mode} />}
      {type === "Next steps" && <StyledmountainFlag $mode={mode} />}
      {type === "Next steps" && <StyledmountainFlag2 />}
      {type === "Next steps" && <StyledmountainFlag3 />}
      {type === "Learnings" && <StyledRectangle814 $mode={mode} />}
      {type === "Learnings" && <StyledUnion5 $mode={mode} />}
      {type === "Learnings" && <StyledRectangle816 />}
      {type === "Case studies" && (
        <div>
          {type === "Case studies" && <StyledHighlight12 />}
          {type === "Case studies" && <StyledRectangle818 />}
        </div>
      )}
      {type === "Case studies" && (
        <div>
          {type === "Case studies" && <StyledHighlight13 />}
          {type === "Case studies" && <StyledRectangle8182 />}
        </div>
      )}
      {type === "Case studies" && (
        <div>
          {type === "Case studies" && <StyledHighlight14 />}
          {type === "Case studies" && <StyledRectangle8183 />}
        </div>
      )}
      {type === "Case studies" && (
        <div>
          {type === "Case studies" && <StyledHighlight15 />}
          {type === "Case studies" && <StyledRectangle8184 />}
        </div>
      )}
      {type === "New image" && <StyledVector34 />}
      {type === "Gift" && <StyledRectangle825 />}
      {type === "Gift" && <StyledRectangle8252 />}
      {type === "Personal success" && <Styled3 $mode={mode} />}
    </StyledRoot>
  );
});
