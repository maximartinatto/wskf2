import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./Nav";

let desktopMedia;
let mediaListener;

beforeEach(() => {
  desktopMedia = {
    matches: false,
    addEventListener: jest.fn((event, listener) => { mediaListener = listener; }),
    removeEventListener: jest.fn(),
  };
  window.matchMedia = jest.fn(() => desktopMedia);
});

function Page() {
  const navigate = useNavigate();
  return <main><button onClick={() => navigate("/contacto")}>Ir a contacto</button></main>;
}

function renderNavigation() {
  return render(
    <MemoryRouter initialEntries={["/home"]}>
      <Nav />
      <Page />
      <Routes>
        <Route path="/home" element={<h1>Inicio</h1>} />
        <Route path="/eventos" element={<h1>Calendario de eventos</h1>} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
      </Routes>
    </MemoryRouter>,
  );
}

test("el menú se cierra al elegir una página y marca el enlace activo", () => {
  renderNavigation();
  fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));
  expect(screen.getByRole("button", { name: "Cerrar menú" })).toHaveAttribute("aria-expanded", "true");
  fireEvent.click(screen.getByRole("link", { name: "Eventos" }));
  expect(screen.getByRole("heading", { name: "Calendario de eventos" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Eventos" })).toHaveAttribute("aria-current", "page");
  expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute("aria-expanded", "false");
});

test("Escape devuelve el foco al botón y un toque fuera también cierra el menú", () => {
  renderNavigation();
  fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));
  fireEvent.keyDown(document, { key: "Escape" });
  expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveFocus();
  fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));
  fireEvent.pointerDown(screen.getByRole("main"));
  expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute("aria-expanded", "false");
});

test("al pasar a escritorio se restablece el menú para volver a móvil cerrado", () => {
  const { unmount } = renderNavigation();
  fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));
  act(() => {
    desktopMedia.matches = true;
    mediaListener();
  });
  expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute("aria-expanded", "false");
  unmount();
  expect(desktopMedia.removeEventListener).toHaveBeenCalledWith("change", mediaListener);
});

test("una navegación iniciada fuera del menú también lo cierra", () => {
  renderNavigation();
  fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));
  fireEvent.click(screen.getByRole("button", { name: "Ir a contacto" }));
  expect(screen.getByRole("heading", { name: "Contacto" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute("aria-expanded", "false");
});
