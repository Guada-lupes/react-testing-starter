import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";

describe('TermsAndCondicions', () => {
    it('Debe renderizar con texto correcto y estado inicial', () => {
        render(<TermsAndConditions/>)
        const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Terms & Conditions')

    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).not.toBeChecked();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    })
})