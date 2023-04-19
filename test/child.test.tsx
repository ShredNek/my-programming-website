import React from "react";
import PrincipalsBigScreen from "../src/components/principleComponents/GeneralPrinciplesBigScreen";
import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PRINCIPLES } from "../src/global/GLOBALS";

describe("Is child undefined test", () => {
  const PRN = PRINCIPLES.generalPrinciples;

  beforeEach(() => {
    render(<PrincipalsBigScreen principles={PRN} />);
  });

  it("renders the component with noMagicNumbers heading text", () => {
    const wrapper = render(<PrincipalsBigScreen principles={PRN} />);
    expect(wrapper.queryAllByText(PRN.dry.headingText)).toBeDefined();
  });
});
