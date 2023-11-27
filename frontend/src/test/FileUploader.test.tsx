import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import api from "../services/api";
import FileUploader from "../pages/FileUploader";

jest.mock("../services/api", () => ({
  post: jest.fn(),
}));

describe("FileUploader", () => {
  test("renders component", async () => {
    render(
      <BrowserRouter>
        <FileUploader />
      </BrowserRouter>
    );
    await screen.findByLabelText(/Choose file/i);
    expect(screen.getByLabelText(/Choose file/i)).toBeInTheDocument();
  });

  test("uploads file on button click", async () => {
    render(
      <BrowserRouter>
        <FileUploader />
      </BrowserRouter>
    );

    // Mock file
    const file = new File([""], "test.csv", { type: "text/csv" });

    // Fire file change event
    const input = await screen.findByLabelText(/Choose file/i);
    fireEvent.change(input, { target: { files: [file] } });

    // Fire upload button click
    const uploadButton = await screen.findByText(/upload/i);
    fireEvent.click(uploadButton);

    // Wait for the asynchronous upload operation to complete
    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith("/api/files", expect.any(FormData));
    });
  });
});
